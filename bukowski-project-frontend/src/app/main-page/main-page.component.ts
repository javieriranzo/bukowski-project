import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  public randomNumber1: number = 0;
  public randomNumber2: number = 0;
  public countdown: number = 120; // 2 minutos en segundos
  public randomNumbers1History: number[] = [];
  public randomNumbers2History: number[] = [];

  private countdownInterval: any;

  constructor() {
    this.generateRandomNumbers();
    setInterval(() => this.generateRandomNumbers(), 5 * 1000); // Refresca cada 5 segundos
    this.startCountdown();
  }

  // Función que genera números aleatorios
  generateRandomNumbers(): void {
    this.randomNumber1 = this.generateUniqueRandomNumber(4, 8.5, this.randomNumbers1History);
    this.randomNumber2 = this.generateUniqueRandomNumber(2.5, 5, this.randomNumbers2History);

    this.countdown = 120; // Reinicia la cuenta atrás a 2 minutos
  }

  // Genera un número aleatorio dentro de un rango
  generateUniqueRandomNumber(min: number, max: number, history: number[]): number {
    let randomNumber: number;
    do {
      randomNumber = parseFloat((Math.random() * (max - min) + min).toFixed(2));
      randomNumber = this.roundToNearestDecimal(randomNumber);
    } while (history.length > 0 && randomNumber === history[history.length - 1]);
    return randomNumber;
  }

  // Redondeo basado en el segundo decimal
  roundToNearestDecimal(value: number): number {
    const decimalPart = value * 100 % 10;
    if (decimalPart < 5) {
      return Math.floor(value * 10) / 10; // Redondear hacia abajo
    } else {
      return Math.ceil(value * 10) / 10; // Redondear hacia arriba
    }
  }

  // Inicia la cuenta atrás de 2 minutos
  startCountdown(): void {
    this.countdownInterval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      }
    }, 1000);
  }

  // Formatea la cuenta atrás para mostrar minutos y segundos
  getFormattedCountdown(): string {
    if (this.countdown < 60) {
      return `Nuevo precio en: ${this.countdown} segundos`;
    } else {
      const minutes = Math.floor(this.countdown / 60);
      const seconds = this.countdown % 60;
      return `Nuevo precio en: ${minutes} minuto${minutes > 1 ? 's' : ''} y ${seconds} segundo${seconds !== 1 ? 's' : ''}`;
    }
  }

}
