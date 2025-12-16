import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { BeerTap } from '../../models/beer-tap.model';
import { BEERTAP_ITEMS } from '../../../utils/beers.data';

@Component({
  selector: 'app-blackboard-page',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './blackboard-page.html',
  styleUrl: './blackboard-page.scss',
})
export class BlackboardPage {

  beers: BeerTap[] = BEERTAP_ITEMS;

}
