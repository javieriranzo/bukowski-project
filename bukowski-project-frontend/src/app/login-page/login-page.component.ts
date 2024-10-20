import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  public email: string = '';
  public password: string = '';

  onSubmit(): void {
    if (this.email && this.password) {
      // Aquí va la lógica de autenticación
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // Redireccionar o mostrar un mensaje de éxito/error
    }
  }

}
