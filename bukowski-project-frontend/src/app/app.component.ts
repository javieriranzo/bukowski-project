import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastInfo } from './shared/toast-info/toast-info';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastInfo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
}
