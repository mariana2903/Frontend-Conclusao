import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { IPrescriptionData, IActionDetails, IConfidenceDetails } from '../../data.interfaces';

@Component({
  selector: 'app-introducao',
  standalone: true,
  imports: [CommonModule],
  providers: [DecimalPipe],
  templateUrl: './introducao.html',
  styleUrl: './introducao.scss'
})
export class Introducao implements OnInit {
  allData = signal<IPrescriptionData[]>([]);
  selectedMonth = signal('');
  isAccordionOpen = signal(false);

  uniqueMonths = computed(() => {
    const map = new Map();
    this.allData().forEach(item => {
      if (!map.has(item.Mes)) {
        map.set(item.Mes, item);
      }
    });
    return [...map.values()].sort((a, b) => a.MesNumero - b.MesNumero);
  });

  filteredData = computed(() => {
    const month = this.selectedMonth();
    return this.allData()
      .filter(item => item.Mes === month)
      .sort((a, b) => a.Produto.localeCompare(b.Produto));
  });

  constructor(private mockService: MockDataService) {}

  ngOnInit() {
    this.mockService.getPrescriptionData().subscribe(data => {
      this.allData.set(data);
      if (data.length > 0) {
        this.selectedMonth.set(this.uniqueMonths()[0]?.Mes || '');
      }
    });
  }

  onMonthChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedMonth.set(selectElement.value);
  }

  toggleAccordion(): void {
    this.isAccordionOpen.update(value => !value);
  }

  getActionDetails(acao: string): IActionDetails {
    if (acao.includes("Aumentar")) {
      return { text: "Aumentar Preço", colorClasses: "action-up", iconName: 'up' };
    }
    if (acao.includes("Reduzir")) {
      return { text: "Reduzir Preço", colorClasses: "action-down", iconName: 'down' };
    }
    return { text: "Manter / Analisar", colorClasses: "action-neutral", iconName: 'pause' };
  }

  formatConfidence(rSquared: number): IConfidenceDetails {
    const percent = (rSquared * 100).toFixed(0);
    if (rSquared >= 0.70) {
      return { text: `${percent}% (Alta)`, class: 'text-green' };
    }
    if (rSquared >= 0.40) {
      return { text: `${percent}% (Média)`, class: 'text-yellow' };
    }
    return { text: `${percent}% (Baixa)`, class: 'text-red' };
  }
}
