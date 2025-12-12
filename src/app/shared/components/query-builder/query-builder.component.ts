import { Component, OnInit, ChangeDetectionStrategy, input, output, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryBuilderModule, QueryBuilderComponent as SyncfusionQueryBuilderComponent, RuleModel } from '@syncfusion/ej2-angular-querybuilder';

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

@Component({
  selector: 'app-query-builder',
  standalone: true,
  imports: [CommonModule, QueryBuilderModule],
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryBuilderComponent {
  querybuilder = viewChild<SyncfusionQueryBuilderComponent>('querybuilder');

  // Configuration
  dataSource = input<any[]>([]);
  columns = input<QueryBuilderColumn[]>([]);
  rule = input<RuleModel>({ condition: 'and', rules: [] });
  width = input<string | number>('100%');
  height = input<string | number>('600px');
  allowValidation = input<boolean>(true);
  enableNotCondition = input<boolean>(true);
  maxGroupCount = input<number>(5);
  separator = input<string>(',');
  displayMode = input<'Horizontal' | 'Vertical'>('Horizontal');
  showButtons = input<boolean>(true);

  // Styling
  customClass = input<string>('');

  // Events
  created = output<any>();
  beforeChange = output<any>();
  change = output<any>();
  ruleChange = output<any>();
  beforeRuleAdd = output<any>();
  ruleAdd = output<any>();
  beforeRuleDelete = output<any>();
  ruleDelete = output<any>();
  beforeGroupAdd = output<any>();
  groupAdd = output<any>();
  beforeGroupDelete = output<any>();
  groupDelete = output<any>();

  /**
   * Get SQL query
   */
  getSqlFromRules(): string {
    const qb = this.querybuilder();
    if (qb) {
      return qb.getSqlFromRules(this.rule());
    }
    return '';
  }

  /**
   * Get rules
   */
  getRules(): RuleModel {
    const qb = this.querybuilder();
    if (qb) {
      return qb.getRules();
    }
    return this.rule();
  }

  /**
   * Set rules
   */
  setRules(rule: RuleModel): void {
    const qb = this.querybuilder();
    if (qb) {
      qb.setRules(rule);
    }
  }

  /**
   * Add groups
   */
  addGroups(groups: RuleModel[], groupID: string): void {
    const qb = this.querybuilder();
    if (qb) {
      qb.addGroups(groups, groupID);
    }
  }

  /**
   * Add rules
   */
  addRules(rules: RuleModel[], groupID: string): void {
    const qb = this.querybuilder();
    if (qb) {
      qb.addRules(rules, groupID);
    }
  }

  /**
   * Delete groups
   */
  deleteGroups(groupIDs: string[]): void {
    const qb = this.querybuilder();
    if (qb) {
      qb.deleteGroups(groupIDs);
    }
  }

  /**
   * Notify change
   */
  notifyChange(value: string | number | boolean | Date | string[] | number[] | Date[], element: Element, type?: string): void {
    const qb = this.querybuilder();
    if (qb) {
      qb.notifyChange(value, element, type);
    }
  }

  /**
   * Refresh
   */
  refresh(): void {
    const qb = this.querybuilder();
    if (qb) {
      qb.dataBind();
    }
  }

  /**
   * Get query builder instance
   */
  getQueryBuilderInstance(): SyncfusionQueryBuilderComponent | null {
    return this.querybuilder() || null;
  }

  // Event Handlers
  onCreated(event: any): void {
    this.created.emit(event);
  }

  onRuleChange(event: any): void {
    this.ruleChange.emit(event);
  }

  onRuleAdd(event: any): void {
    this.ruleAdd.emit(event);
  }

  onBeforeRuleDelete(event: any): void {
    this.beforeRuleDelete.emit(event);
  }

  onRuleDelete(event: any): void {
    this.ruleDelete.emit(event);
  }

  onBeforeGroupAdd(event: any): void {
    this.beforeGroupAdd.emit(event);
  }

  onGroupAdd(event: any): void {
    this.groupAdd.emit(event);
  }

  onBeforeGroupDelete(event: any): void {
    this.beforeGroupDelete.emit(event);
  }

  onGroupDelete(event: any): void {
    this.groupDelete.emit(event);
  }
}
