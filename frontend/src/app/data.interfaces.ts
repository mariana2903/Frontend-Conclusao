export interface IPrescriptionData {
  Mes: string;
  MesNumero: number;
  Produto: string;
  ElasticidadeBeta: number;
  ConfiancaR2: number;
  Observacoes: number; // N
  AcaoRecomendada: string;
  FaixaSugerida: string;
  FaixaPraticadaMes: string;
}

export interface IMockDailyPrice {
  data: string; // YYYY-MM-DD
  produto: string;
  precoMedioDia: number;
}

export interface IActionDetails {
  text: string;
  colorClasses: string;
  iconName: 'up' | 'down' | 'pause';
}

export interface IConfidenceDetails {
  text: string;
  class: string;
}

export interface ICalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  prices: IMockDailyPrice[];
}

export interface IChartData {
  name: string;
  value: number;
}
