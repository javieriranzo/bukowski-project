import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastMessage {
  message: string;
  type: ToastType;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private readonly _toast = signal<ToastMessage | null>(null);
  readonly toast = this._toast.asReadonly();

  show(message: string, type: ToastType = 'info', duration = 3000) {
    this._toast.set({ message, type });

    setTimeout(() => {
      this.clear();
    }, duration);
  }

  clear() {
    this._toast.set(null);
  }
}
