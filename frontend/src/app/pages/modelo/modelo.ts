import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';
import { MockDataService } from '../../services/mock-data.service';
import { IPrescriptionData, IChartData } from '../../data.interfaces';

@Component({
  selector: 'app-modelo',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  providers: [DecimalPipe],
  templateUrl: './modelo.html',
  styleUrl: './modelo.scss'
})
export class Modelo implements OnInit {
  allData = signal<IPrescriptionData[]>([]);

  aggregatedData = computed(() => {
    const map = new Map<string, { totalBeta: number; totalR2: number; count: number }>();
    this.allData().forEach(item => {
      if (!map.has(item.Produto)) {
        map.set(item.Produto, { totalBeta: 0, totalR2: 0, count: 0 });
      }
      const stats = map.get(item.Produto)!;
      stats.totalBeta += item.ElasticidadeBeta;
      stats.totalR2 += item.ConfiancaR2;
      stats.count++;
    });

    const results: { name: string; avgBeta: number; avgR2: number }[] = [];
    map.forEach((stats, name) => {
      results.push({
        name,
        avgBeta: stats.totalBeta / stats.count,
        avgR2: stats.totalR2 / stats.count
      });
    });
    return results;
  });

  kpiTotalProdutos = computed(() => this.aggregatedData().length);

  kpiProdutoMaisElastico = computed(() => {
    return [...this.aggregatedData()].sort((a, b) => a.avgBeta - b.avgBeta)[0] || { name: 'N/A', avgBeta: 0 };
  });

  kpiProdutoMaisInelastico = computed(() => {
    return [...this.aggregatedData()]
      .filter(d => d.avgBeta < 0)
      .sort((a, b) => b.avgBeta - a.avgBeta)[0] || { name: 'N/A', avgBeta: 0 };
  });

  chartDataElasticidade = computed((): IChartData[] => {
    return this.aggregatedData().map(d => ({
      name: d.name.split('-')[0].trim(), // Encurtar nome
      value: d.avgBeta
    })).sort((a, b) => a.value - b.value);
  });

  chartDataConfianca = computed((): IChartData[] => {
    return this.aggregatedData().map(d => ({
      name: d.name.split('-')[0].trim(),
      value: d.avgR2
    })).sort((a, b) => b.value - a.value);
  });

  allDataSorted = computed(() => {
    return [...this.allData()].sort((a, b) => a.MesNumero - b.MesNumero || a.Produto.localeCompare(b.Produto));
  });

  // Cores dos gráficos (Corrigido)
  colorSchemeElasticidade: Color = {
    name: 'elasticidade',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#f59e0b', '#10b981', '#3b82f6', '#ef4444']
  };

  colorSchemeConfianca: Color = {
    name: 'confianca',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#3b82f6', '#14b8a6', '#6366f1']
  };

  constructor(private mockService: MockDataService) {}

  ngOnInit() {
    this.mockService.getPrescriptionData().subscribe(data => {
      this.allData.set(data);
    });
  }
}
