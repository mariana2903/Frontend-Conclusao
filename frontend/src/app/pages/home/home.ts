import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PriceService, PriceRecommendation } from '../../services/price.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  recommendations: PriceRecommendation[] = [];
  loading = false;
  error = '';

  constructor(private priceService: PriceService) { }

  ngOnInit(): void {
    
  }

  loadRecommendations(): void {
    this.loading = true;
    this.error = '';
    
    this.priceService.getRecommendations().subscribe({
      next: (data: PriceRecommendation[]) => {
        this.recommendations = data.filter(rec => rec.formato != "ENCAIXE AVULSO");
        this.loading = false;
      },
      error: (err: any) => {
        this.error = 'Erro ao carregar recomendações';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
