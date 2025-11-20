import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email: string = '';
  password: string = '';
  error: string | null = null;

  constructor(private router: Router) {}

  onLogin(): void {
    if (this.email === 'gazeta' && this.password === '1234') {
      this.router.navigate(['/introducao']);
    } else {
      this.error = 'Usuário ou senha inválidos.';
    }
  }
}
