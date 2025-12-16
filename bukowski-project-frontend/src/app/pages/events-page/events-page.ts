import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Events } from '../../models/events.model';
import { EVENTS_ITEMS } from '../../../utils/events.data';

@Component({
  selector: 'app-events-page',
  imports: [CommonModule],
  templateUrl: './events-page.html',
  styleUrl: './events-page.scss',
})
export class EventsPage {

  events: Events[] = EVENTS_ITEMS;

  currentIndex = 0;
  autoplayId!: number;
  readonly AUTOPLAY_TIME = 6000; // 6 segundos

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  /* ===============================
     AUTOPLAY
  ================================ */
  startAutoplay() {
    this.stopAutoplay();
    this.autoplayId = window.setInterval(() => {
      this.next(false);
    }, this.AUTOPLAY_TIME);
  }

  stopAutoplay() {
    if (this.autoplayId) {
      clearInterval(this.autoplayId);
    }
  }

  /* ===============================
     NAVEGACIÓN MANUAL
  ================================ */
  prev(manual = true) {
    this.currentIndex =
      (this.currentIndex - 1 + this.events.length) % this.events.length;

    if (manual) {
      this.startAutoplay(); // reinicia autoplay
    }
  }

  next(manual = true) {
    this.currentIndex =
      (this.currentIndex + 1) % this.events.length;

    if (manual) {
      this.startAutoplay(); // reinicia autoplay
    }
  }

  get currentEvent(): Events {
    return this.events[this.currentIndex];
  }

}
