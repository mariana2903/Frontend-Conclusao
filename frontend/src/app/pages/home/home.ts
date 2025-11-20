import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  currentUser = 'Parceiro';
  activePage = 'dashboard'; // dashboard | calendar | overview

  constructor(private router: Router) {
    // Atualiza a página ativa baseado na rota atual
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;
      if (url.includes('introducao')) this.activePage = 'dashboard'; // Prescritor
      else if (url.includes('funcionalidades')) this.activePage = 'calendar'; // Calendário
      else if (url.includes('modelo')) this.activePage = 'overview'; // Visão Geral
    });
  }

  ngOnInit(): void {}

  logout(): void {
    this.router.navigate(['/login']);
  }
  
  getPageTitle(): string {
    switch(this.activePage) {
      case 'dashboard': return 'Prescritor de Preços';
      case 'calendar': return 'Calendário de Preços';
      case 'overview': return 'Visão Geral';
      default: return 'Dashboard';
    }
  }
}
