import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PriceRecommendation {
  praca: string;
  formato: string;
  programa: string;
  duracao: number;
  faixaHoraria: string;
  precoSugerido: number;
  precoTabela: number;
  percentualDesconto: number;
  confiancaModelo: number;
}

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  private apiUrl = 'https://localhost:44348/api/Price/recommendations';

  constructor(private http: HttpClient) { }

  getRecommendations(): Observable<PriceRecommendation[]> {
    return this.http.get<PriceRecommendation[]>(this.apiUrl);
  }
}
