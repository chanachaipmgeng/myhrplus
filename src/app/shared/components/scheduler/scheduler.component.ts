import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, input, output, effect, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import {
  ScheduleComponent,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  MonthAgendaService,
  TimelineViewsService,
  TimelineMonthService,
  ResizeService,
  DragAndDropService,
  ExcelExportService,
  ICalendarExportService,
  ICalendarImportService,
  PrintService,
  EventSettingsModel,
  View
} from '@syncfusion/ej2-angular-schedule';

export interface SchedulerEvent {
  Id?: number | string;
  Subject: string;
  StartTime: Date | string;
  EndTime: Date | string;
  Description?: string;
  Location?: string;
  IsAllDay?: boolean;
  RecurrenceRule?: string;
  RecurrenceID?: number | string;
  RecurrenceException?: string;
  StartTimezone?: string;
  EndTimezone?: string;
  CategoryColor?: string;
  [key: string]: any;
}

export interface SchedulerConfig {
  currentView?: View;
  views?: View[];
  selectedDate?: Date;
  startHour?: string;
  endHour?: string;
  workDays?: number[];
  firstDayOfWeek?: number;
  showWeekend?: boolean;
  allowDragAndDrop?: boolean;
  allowResizing?: boolean;
  allowExcelExport?: boolean;
  allowICalendarExport?: boolean;
  allowICalendarImport?: boolean;
  allowPrint?: boolean;
  enableRtl?: boolean;
  height?: string | number;
  width?: string | number;
  eventSettings?: EventSettingsModel;
  group?: any;
  resources?: any[];
  locale?: string;
  enableAdaptiveUI?: boolean;
}

@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [CommonModule, ScheduleModule],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService,
    TimelineMonthService,
    ResizeService,
    DragAndDropService,
    ExcelExportService,
    ICalendarExportService,
    ICalendarImportService,
    PrintService
  ],
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchedulerComponent implements OnInit, OnDestroy {
  schedule = viewChild<ScheduleComponent>('schedule');

  // Data Source
  eventSettings = input<EventSettingsModel>({
    dataSource: []
  });

  // Views
  currentView = input<View>('Month');
  views = input<View[]>(['Day', 'Week', 'WorkWeek', 'Month', 'Agenda', 'MonthAgenda']);

  // Date & Time
  selectedDate = input<Date>(new Date());
  startHour = input<string>('09:00');
  endHour = input<string>('18:00');
  workDays = input<number[]>([1, 2, 3, 4, 5]); // Monday to Friday
  firstDayOfWeek = input<number>(0); // Sunday
  showWeekend = input<boolean>(true);

  // Features
  allowDragAndDrop = input<boolean>(true);
  allowResizing = input<boolean>(true);
  allowExcelExport = input<boolean>(true);
  allowICalendarExport = input<boolean>(true);
  allowICalendarImport = input<boolean>(true);
  allowPrint = input<boolean>(true);
  enableRtl = input<boolean>(false);
  enableAdaptiveUI = input<boolean>(true);

  // Grouping & Resources
  group = input<any>(null);
  resources = input<any[]>([]);

  // Size
  height = input<string | number>('600px');
  width = input<string | number>('100%');

  // Locale
  locale = input<string>('en');

  // Styling
  customClass = input<string>('');

  // Events
  eventClick = output<any>();
  eventDoubleClick = output<any>();
  cellClick = output<any>();
  cellDoubleClick = output<any>();
  navigating = output<any>();
  actionBegin = output<any>();
  actionComplete = output<any>();
  eventRendered = output<any>();
  popupOpen = output<any>();
  popupClose = output<any>();
  dragStart = output<any>();
  dragStop = output<any>();
  resizeStart = output<any>();
  resizeStop = output<any>();

  constructor() {
    effect(() => {
      // Handle necessary updates if template binding is insufficient
    });
  }

  ngOnInit(): void {
    // Initialize if needed
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  /**
   * Refresh scheduler
   */
  refresh(): void {
    this.schedule()?.refresh();
  }

  /**
   * Export to Excel
   */
  exportToExcel(): void {
    this.schedule()?.exportToExcel();
  }

  /**
   * Export to iCalendar
   */
  exportToICalendar(): void {
    this.schedule()?.exportToICalendar();
  }

  /**
   * Import from iCalendar
   */
  importICalendar(file: File): void {
    this.schedule()?.importICalendar(file);
  }

  /**
   * Print
   */
  print(): void {
    this.schedule()?.print();
  }

  /**
   * Navigate to date
   */
  navigateToDate(date: Date): void {
    const s = this.schedule();
    if (s) {
      s.selectedDate = date;
      s.dataBind();
    }
  }

  /**
   * Change view
   */
  changeView(view: View): void {
    const s = this.schedule();
    if (s) {
      s.currentView = view;
      s.dataBind();
    }
  }

  /**
   * Get scheduler instance
   */
  getSchedulerInstance(): ScheduleComponent | null {
    return this.schedule() || null;
  }

  /**
   * Add event
   */
  addEvent(event: SchedulerEvent): void {
    const s = this.schedule();
    // This method implementation might need review as directly mutating input signals is not possible
    // But here we are mutating the Syncfusion component's settings directly or the input object reference?
    // Wait, eventSettings is an input signal. We cannot mutate it.
    // However, the original code logic was mutating `this.eventSettings` which was an @Input property.
    // Since we are migrating to signals, we can't write to `this.eventSettings`.
    // Instead we should probably be relying on the parent to update the data, OR we directly interact with the Schedule methods.
    // Syncfusion Schedule usually has addEvent methods.

    // Original code:
    // dataSource.push(event);
    // this.eventSettings = { ...this.eventSettings, dataSource };
    // this.schedule.eventSettings = this.eventSettings;
    // this.schedule.refresh();

    // Since this is a wrapper component, ideally the parent should manage state. 
    // BUT to keep backward compatibility with the imperative method style:
    if (s) {
      s.addEvent(event);
    }
  }

  /**
   * Update event
   */
  updateEvent(event: SchedulerEvent): void {
    const s = this.schedule();
    if (s) {
      s.saveEvent(event);
    }
  }

  /**
   * Delete event
   */
  deleteEvent(eventId: number | string): void {
    const s = this.schedule();
    if (s) {
      s.deleteEvent(eventId);
    }
  }
}


