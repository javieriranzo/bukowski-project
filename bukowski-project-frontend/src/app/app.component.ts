import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly title = signal('bukowski-project-frontend');

  constructor(private router: Router) {}

  // Navegación rápida a las rutas
  navigate(path: string) {
    this.router.navigate([path]);
  }
  
}
