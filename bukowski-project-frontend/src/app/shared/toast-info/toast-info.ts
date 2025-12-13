import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast-info.service';

@Component({
  selector: 'app-toast-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-info.html',
  styleUrl: './toast-info.scss',
})
export class ToastInfo {

  readonly toastService = inject(ToastService);

}
