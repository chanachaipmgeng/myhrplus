import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, input, output, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import {
  CalendarModule,
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  CalendarEventTimesChangedEventType
} from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  format
} from 'date-fns';
import { GlassButtonComponent } from '../glass-button/glass-button.component';
import { CalendarService, CalendarEventMeta } from '../../../core/services/calendar.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    GlassButtonComponent
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit, OnDestroy {
  view = model<CalendarView>(CalendarView.Month);
  viewDate = model<Date>(new Date());
  events = input<CalendarEvent<CalendarEventMeta>[]>([]);
  activeDayIsOpen = model<boolean>(true);
  showToolbar = input<boolean>(true);
  showWeekends = input<boolean>(true);
  dayStartHour = input<number>(0);
  dayEndHour = input<number>(23);
  hourSegments = input<number>(2);
  weekStartsOn = input<number>(1);
  excludeDays = input<number[]>([]);
  weekendDays = input<number[]>([0, 6]);
  eventActions = input<CalendarEventAction[]>([]);
  refresh = input<Subject<any>>(new Subject());

  viewChange = output<CalendarView>();
  viewDateChange = output<Date>();
  eventClicked = output<CalendarEvent<CalendarEventMeta>>();
  dayClicked = output<{ date: Date; events: CalendarEvent<CalendarEventMeta>[] }>();
  eventTimesChanged = output<CalendarEventTimesChangedEvent>();
  eventDropped = output<CalendarEvent<CalendarEventMeta>>();
  refreshClicked = output<void>();

  CalendarView = CalendarView; // Expose CalendarView enum to template
  CalendarEventTimesChangedEventType = CalendarEventTimesChangedEventType;

  private destroy$ = new Subject<void>();

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    // Subscribe to refresh events from the input subject
    this.refresh().pipe(takeUntil(this.destroy$)).subscribe(() => {
      // Handle refresh if needed
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Event Handlers
  onViewChange(view: CalendarView): void {
    this.view.set(view);
    this.viewChange.emit(view);
  }

  onViewDateChange(date: Date): void {
    this.viewDate.set(date);
    this.viewDateChange.emit(date);
  }

  onEventClicked(event: any): void {
    this.eventClicked.emit(event.event);
  }

  onDayClicked(event: any): void {
    this.dayClicked.emit({ date: event.day.date, events: event.day.events });
  }

  onEventTimesChanged(event: CalendarEventTimesChangedEvent): void {
    this.eventTimesChanged.emit(event);
  }

  onEventDropped(event: any): void {
    this.eventDropped.emit(event);
  }

  onRefreshClicked(): void {
    this.refreshClicked.emit();
  }

  // Navigation methods
  previousView(): void {
    const newDate = this.getPreviousViewDate();
    this.onViewDateChange(newDate);
  }

  nextView(): void {
    const newDate = this.getNextViewDate();
    this.onViewDateChange(newDate);
  }

  today(): void {
    this.onViewDateChange(new Date());
  }

  setView(view: CalendarView): void {
    this.onViewChange(view);
  }

  closeOpenMonthViewDay(): void {
    this.activeDayIsOpen.set(false);
  }

  // Private helper methods
  private getPreviousViewDate(): Date {
    switch (this.view()) {
      case CalendarView.Month:
        return subDays(this.viewDate(), 1);
      case CalendarView.Week:
        return subDays(this.viewDate(), 7);
      case CalendarView.Day:
        return subDays(this.viewDate(), 1);
      default:
        return this.viewDate();
    }
  }

  private getNextViewDate(): Date {
    switch (this.view()) {
      case CalendarView.Month:
        return addDays(this.viewDate(), 1);
      case CalendarView.Week:
        return addDays(this.viewDate(), 7);
      case CalendarView.Day:
        return addDays(this.viewDate(), 1);
      default:
        return this.viewDate();
    }
  }

  // Utility methods for template
  isSameDay = isSameDay;
  isSameMonth = isSameMonth;
  format = format;
}

