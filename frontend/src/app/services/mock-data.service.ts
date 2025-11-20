import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPrescriptionData, IMockDailyPrice } from '../data.interfaces';
import { RAW_DATA } from './data';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  private prescriptionData: IPrescriptionData[] = [];

  private dailyPrices: IMockDailyPrice[] = [];

  private monthMap: { [key: string]: string } = {
    'Jan': 'Janeiro',
    'Fev': 'Fevereiro',
    'Mar': 'Março',
    'Abr': 'Abril',
    'Mai': 'Maio',
    'Jun': 'Junho',
    'Jul': 'Julho',
    'Ago': 'Agosto',
    'Set': 'Setembro',
    'Out': 'Outubro',
    'Nov': 'Novembro',
    'Dez': 'Dezembro'
  };

  constructor() {
    this.loadPrescriptionData();
    this.generateMockDailyPrices();
  }

  private loadPrescriptionData() {
    this.prescriptionData = RAW_DATA.map((item: any) => {
      const monthName = this.monthMap[item.mes_nome] || item.mes_nome;
      // Mantendo o padrão "Mês Ano" do mock original, assumindo 2025
      const fullMonth = `${monthName} 2025`; 

      return {
        Mes: fullMonth,
        MesNumero: item.mes_num,
        Produto: item.produto_duracao,
        ElasticidadeBeta: item.beta_elasticidade,
        ConfiancaR2: item.r_quadrado_mes,
        Observacoes: item.n_obs_mes,
        AcaoRecomendada: item.acao_recomendada,
        // Mapeando as propriedades com nomes especiais usando notação de colchetes
        FaixaSugeridaR30s: item['faixa_sugerida_R$_30s'],
        FaixaPraticadaMesR30s: item['faixa_praticada_MES_R$_30s']
      };
    });
  }

  private generateMockDailyPrices() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    
    // Gera preços para o mês atual e próximo
    for (let d = 1; d <= 31; d++) {
      const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
      
      this.dailyPrices.push({
        data: dateStr,
        produto: 'RÁDIO_FM',
        precoMedioDia: 20 + Math.random() * 5
      });
      
      this.dailyPrices.push({
        data: dateStr,
        produto: 'TV_SUL',
        precoMedioDia: 100 + Math.random() * 20
      });
    }
  }

  getPrescriptionData(): Observable<IPrescriptionData[]> {
    return of(this.prescriptionData);
  }

  getDailyPrices(): Observable<IMockDailyPrice[]> {
    return of(this.dailyPrices);
  }
}
