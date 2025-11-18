import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Introducao } from './pages/introducao/introducao';
import { Funcionalidades } from './pages/funcionalidades/funcionalidades';
import { Modelo } from './pages/modelo/modelo';

export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: '',
    component: Home,
    children: [
      { path: '', redirectTo: 'introducao', pathMatch: 'full' },
      { path: 'introducao', component: Introducao },
      { path: 'funcionalidades', component: Funcionalidades },
      { path: 'modelo', component: Modelo },
    ]
  }
];