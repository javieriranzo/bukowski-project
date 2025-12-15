import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-menu-page',
  imports: [RouterOutlet],
  templateUrl: './navbar-menu-page.html',
  styleUrl: './navbar-menu-page.scss',
})
export class NavbarMenuPage {

  protected readonly title = signal('bukowski-project-frontend');

  constructor(private router: Router) {}

  // Navegación rápida a las rutas
  navigate(path: string) {
    this.router.navigate([path]);
  }

}
