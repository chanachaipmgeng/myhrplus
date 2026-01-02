import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { DataGridComponent } from '@shared/components/data-grid/data-grid.component';
import { GlassInputComponent } from '@shared/components/glass-input/glass-input.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { CompanyTypeService } from '../../services/company-type.service';
import { CompanyType } from '../../models/company-type.model';
import { CompanyTypeFormComponent } from './company-type-form.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';
import { Subject, takeUntil, debounceTime, distinctUntilChanged, switchMap, startWith } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-type-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    PageHeaderComponent,
    DataGridComponent,
    CompanyTypeFormComponent,
    GlassInputComponent,
    GlassButtonComponent,
    GlassCardComponent,
    IconComponent
  ],
  templateUrl: './company-type-list.component.html'
})
export class CompanyTypeListComponent implements OnInit, OnDestroy {
  public service = inject(CompanyTypeService);
  private translate = inject(TranslateService);
  private destroy$ = new Subject<void>();

  // Search Control
  searchControl = new FormControl('');

  // Data State
  data: CompanyType[] = [];

  showModal = false;
  selectedItem: CompanyType | null = null;

  headerActions: any[] = [];
  columns: any[] = [];

  // Stats
  stats = {
    total: 0,
    active: 0,
    inactive: 0
  };

  ngOnInit() {
    // Initialize component
    this.initializeTranslations();

    // Setup Search with Debounce
    this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        this.service.loading.set(true);
        // Note: In a real app, you might pass 'term' to the API. 
        // For now, if the API doesn't support search params, we might filter client-side.
        // Assuming BaseApiService.getAll(params) passes params to API.
        // If API supports ?search=xyz, we use: this.service.getAll({ search: term })
        // If not, we fetch all and filter client-side (legacy app pattern usually).
        // Let's assume we pass it to API for now, or fetch all then filter if API ignores it.
        return this.service.getAll({ search: term });
      }),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result) => {
        // Calculate Stats
        this.stats.total = result.length;
        // Assuming 'active' logic exists or we just count all for now. 
        // If Model has no active field, we'll just show Total.
        // But I added 'active' to Form, so likely it's in data or I should assume it.
        // Let's assume result items might have 'active' field if I add it to model, 
        // or just mock it for now as "Total" is the only sure thing.
        // Actually, I'll check model again. 
        // Model: codeid, tdesc, edesc. No 'active' field documented in model file yet (I only added to form).
        // I will just count total for now.

        // Client-side filtering fallback if API returns everything (common in migration)
        const searchTerm = (this.searchControl.value || '').toLowerCase();
        if (searchTerm) {
          this.data = result.filter(item =>
            (item.codeid && item.codeid.toLowerCase().includes(searchTerm)) ||
            (item.tdesc && item.tdesc.toLowerCase().includes(searchTerm)) ||
            (item.edesc && item.edesc.toLowerCase().includes(searchTerm))
          );
        } else {
          this.data = result;
        }
        this.service.loading.set(false);
      },
      error: (err) => {
        console.error('Error loading data', err);
        this.service.loading.set(false);
      }
    });

    // Translation listener
    this.translate.get(TRANSLATION_KEYS.COMMON.ACTIONS.ADD_NEW).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.initializeTranslations();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeTranslations() {
    this.headerActions = [
      {
        label: this.translate.instant(TRANSLATION_KEYS.COMMON.ACTIONS.ADD_NEW),
        variant: 'primary' as const,
        icon: 'add',
        onClick: () => this.onCreate()
      }
    ];

    this.columns = [
      { field: 'codeid', headerText: this.translate.instant('company.companyType.column.codeId'), width: '100px', isPrimaryKey: true },
      { field: 'tdesc', headerText: this.translate.instant('company.companyType.column.tdesc'), width: '250px' },
      { field: 'edesc', headerText: this.translate.instant('company.companyType.column.edesc'), width: '250px' },
      { field: 'edit_date', headerText: this.translate.instant('company.companyType.column.editDate'), type: 'date' as const, width: '150px', format: 'dd/MM/yyyy' },
      {
        headerText: this.translate.instant('common.columns.actions'),
        width: '120px',
        commands: [
          { type: 'Edit', buttonOption: { iconCss: 'e-icons e-edit', cssClass: 'e-flat' } },
          { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat e-danger' } }
        ]
      }
    ];
  }

  onCreate() {
    this.selectedItem = null;
    this.showModal = true;
  }

  onEdit(args: any) {
    const row = args.data || args;
    this.selectedItem = row;
    this.showModal = true;
  }

  onRefresh() {
    // Trigger value change to reload
    this.searchControl.setValue(this.searchControl.value);
  }

  onSaveSuccess() {
    this.showModal = false;
    this.onRefresh();
  }

  async onCommandClicked(args: any) {
    const command = args.commandColumn;
    const row = args.rowData;

    if (command.type === 'Edit') {
      this.onEdit(row);
    } else if (command.type === 'Delete') {
      await this.onDelete(row);
    }
  }

  async onDelete(row: CompanyType) {
    const result = await Swal.fire({
      title: this.translate.instant('common.dialog.confirmDeleteTitle'),
      text: this.translate.instant('common.dialog.confirmDeleteMessage', { item: row.tdesc }),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: this.translate.instant('common.actions.delete'),
      cancelButtonText: this.translate.instant('common.actions.cancel'),
      customClass: {
        popup: 'glass-modal',
        confirmButton: 'app-btn-danger',
        cancelButton: 'app-btn-secondary'
      }
    });

    if (result.isConfirmed) {
      this.service.loading.set(true);
      this.service.delete(row.codeid).pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          Swal.fire({
            title: this.translate.instant('common.dialog.successTitle'),
            text: this.translate.instant('common.dialog.deleteSuccess'),
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
            customClass: { popup: 'glass-modal' }
          });
          this.onRefresh();
          this.service.loading.set(false);
        },
        error: (err) => {
          console.error(err);
          Swal.fire({
            title: this.translate.instant('common.dialog.errorTitle'),
            text: this.translate.instant('common.dialog.deleteError'),
            icon: 'error',
            customClass: { popup: 'glass-modal' }
          });
          this.service.loading.set(false);
        }
      });
    }
  }
}
