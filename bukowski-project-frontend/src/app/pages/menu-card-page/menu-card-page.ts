import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MenuCard } from '../../models/menu-card.model';
import { MENUCARD_ITEMS } from '../../../utils/menu-card.data';

@Component({
  selector: 'app-menu-card-page',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './menu-card-page.html',
  styleUrl: './menu-card-page.scss',
})
export class MenuCardPage {

  menuCard: MenuCard[] = MENUCARD_ITEMS;

}
