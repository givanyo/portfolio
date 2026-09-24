import { Component, input } from '@angular/core';
import { CardContent } from './card.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  cardInfo = input.required<CardContent>();
}
