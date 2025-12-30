import { Component, Input, OnInit, ViewChild, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';
import {
  QueryBuilderComponent as SyncfusionQueryBuilderComponent,
  RuleModel,
  ColumnsModel
} from '@syncfusion/ej2-angular-querybuilder';

export interface QueryBuilderColumn {
  field: string;
  label: string;
  type: 'string' | 'number' | 'boolean' | 'date' | 'datetime';
  operators?: any[];
  template?: any;
  format?: string;
  values?: any[];
  [key: string]: any;
}

export interface QueryBuilderConfig {
  dataSource?: any[];
  columns?: QueryBuilderColumn[];
  rule?: RuleModel;
  width?: string | number;
  height?: string | number;
  allowValidation?: boolean;
  enableNotCondition?: boolean;
  maxGroupCount?: number;
  separator?: string;
  displayMode?: 'Horizontal' | 'Vertical';
  showButtons?: boolean;
}

@Component({
  selector: 'app-query-builder',
  standalone: true,
  imports: [CommonModule, QueryBuilderModule],
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss']
})
export class QueryBuilderComponent implements OnInit, OnDestroy {
  @ViewChild('querybuilder', { static: false }) querybuilder!: SyncfusionQueryBuilderComponent;

  // Data Source
  @Input() dataSource: any[] = [];
  
  // Columns
  @Input() columns: QueryBuilderColumn[] = [];
  
  // Rule
  @Input() rule: RuleModel = {
    condition: 'and',
    rules: []
  };
  
  // Size
  @Input() width: string | number = '100%';
  @Input() height: string | number = '600px';
  
  // Features
  @Input() allowValidation: boolean = true;
  @Input() enableNotCondition: boolean = true;
  @Input() maxGroupCount: number = 5;
  @Input() separator: string = ',';
  @Input() displayMode: 'Horizontal' | 'Vertical' = 'Horizontal';
  @Input() showButtons: boolean = true;
  
  // Styling
  @Input() customClass: string = '';
  
  // Events
  @Output() created = new EventEmitter<any>();
  @Output() beforeChange = new EventEmitter<any>();
  @Output() change = new EventEmitter<any>();
  @Output() ruleChange = new EventEmitter<any>();
  @Output() beforeRuleAdd = new EventEmitter<any>();
  @Output() ruleAdd = new EventEmitter<any>();
  @Output() beforeRuleDelete = new EventEmitter<any>();
  @Output() ruleDelete = new EventEmitter<any>();
  @Output() beforeGroupAdd = new EventEmitter<any>();
  @Output() groupAdd = new EventEmitter<any>();
  @Output() beforeGroupDelete = new EventEmitter<any>();
  @Output() groupDelete = new EventEmitter<any>();

  ngOnInit(): void {
    // Initialize if needed
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  /**
   * Get SQL query
   */
  getSqlFromRules(): string {
    if (this.querybuilder) {
      return this.querybuilder.getSqlFromRules(this.rule);
    }
    return '';
  }

  /**
   * Get rules
   */
  getRules(): RuleModel {
    if (this.querybuilder) {
      return this.querybuilder.getRules();
    }
    return this.rule;
  }

  /**
   * Set rules
   */
  setRules(rule: RuleModel): void {
    this.rule = rule;
    if (this.querybuilder) {
      this.querybuilder.setRules(rule);
    }
  }

  /**
   * Add groups
   */
  addGroups(groups: RuleModel[], groupID: string): void {
    if (this.querybuilder) {
      this.querybuilder.addGroups(groups, groupID);
    }
  }

  /**
   * Add rules
   */
  addRules(rules: RuleModel[], groupID: string): void {
    if (this.querybuilder) {
      this.querybuilder.addRules(rules, groupID);
    }
  }

  /**
   * Delete groups
   */
  deleteGroups(groupIDs: string[]): void {
    if (this.querybuilder) {
      this.querybuilder.deleteGroups(groupIDs);
    }
  }

  /**
   * Notify change
   */
  notifyChange(value: string | number | boolean | Date | string[] | number[] | Date[], element: Element, type?: string): void {
    if (this.querybuilder) {
      this.querybuilder.notifyChange(value, element, type);
    }
  }

  /**
   * Refresh
   */
  refresh(): void {
    if (this.querybuilder) {
      this.querybuilder.dataBind();
    }
  }

  /**
   * Get query builder instance
   */
  getQueryBuilderInstance(): SyncfusionQueryBuilderComponent | null {
    return this.querybuilder || null;
  }

  /**
   * Event handlers
   */
  onCreated(args: any): void {
    this.created.emit(args);
  }

  onBeforeChange(args: any): void {
    this.beforeChange.emit(args);
  }

  onChange(args: any): void {
    this.change.emit(args);
  }

  onRuleChange(args: any): void {
    this.ruleChange.emit(args);
  }

  onBeforeRuleAdd(args: any): void {
    this.beforeRuleAdd.emit(args);
  }

  onRuleAdd(args: any): void {
    this.ruleAdd.emit(args);
  }

  onBeforeRuleDelete(args: any): void {
    this.beforeRuleDelete.emit(args);
  }

  onRuleDelete(args: any): void {
    this.ruleDelete.emit(args);
  }

  onBeforeGroupAdd(args: any): void {
    this.beforeGroupAdd.emit(args);
  }

  onGroupAdd(args: any): void {
    this.groupAdd.emit(args);
  }

  onBeforeGroupDelete(args: any): void {
    this.beforeGroupDelete.emit(args);
  }

  onGroupDelete(args: any): void {
    this.groupDelete.emit(args);
  }
}

