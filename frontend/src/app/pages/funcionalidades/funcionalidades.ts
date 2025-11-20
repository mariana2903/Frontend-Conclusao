import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { IMockDailyPrice, ICalendarDay } from '../../data.interfaces';

@Component({
  selector: 'app-funcionalidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './funcionalidades.html',
  styleUrl: './funcionalidades.scss'
})
export class Funcionalidades implements OnInit {
  dailyPrices = signal<IMockDailyPrice[]>([]);
  currentDate = signal(new Date());

  currentMonthName = computed(() => {
    return this.currentDate().toLocaleString('pt-BR', { month: 'long', year: 'numeric' });
  });

  calendarDays = computed(() => {
    const date = this.currentDate();
    return this.getCalendarDays(date.getFullYear(), date.getMonth());
  });

  constructor(private mockService: MockDataService) {}

  ngOnInit() {
    this.mockService.getDailyPrices().subscribe(data => {
      this.dailyPrices.set(data);
      // Força atualização do calendário
      this.currentDate.update(d => new Date(d));
    });
  }

  changeMonth(delta: number): void {
    this.currentDate.update(d => {
      const newDate = new Date(d);
      newDate.setMonth(newDate.getMonth() + delta);
      return newDate;
    });
  }

  private getCalendarDays(year: number, month: number): ICalendarDay[] {
    const days: ICalendarDay[] = [];
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDayOfWeek = firstDay.getDay(); // 0=Dom
    const totalDays = lastDay.getDate();

    // Dias mês anterior
    for (let i = 0; i < startDayOfWeek; i++) {
      const d = new Date(year, month, 0 - (startDayOfWeek - 1 - i));
      days.push({ date: d, isCurrentMonth: false, prices: this.getPricesForDate(d) });
    }

    // Dias mês atual
    for (let i = 1; i <= totalDays; i++) {
      const d = new Date(year, month, i);
      days.push({ date: d, isCurrentMonth: true, prices: this.getPricesForDate(d) });
    }

    // Dias mês seguinte
    while (days.length < 42) {
      const last = days[days.length - 1].date;
      const d = new Date(last);
      d.setDate(d.getDate() + 1);
      days.push({ date: d, isCurrentMonth: false, prices: this.getPricesForDate(d) });
    }

    return days;
  }

  private getPricesForDate(date: Date): IMockDailyPrice[] {
    const dateStr = date.toISOString().split('T')[0];
    return this.dailyPrices().filter(p => p.data === dateStr);
  }
}
