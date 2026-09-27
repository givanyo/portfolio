import { Component, input } from '@angular/core';
import { StackCardData } from './stack-card.model';

@Component({
  selector: 'app-stack-card',
  imports: [],
  templateUrl: './stack-card.html',
  styleUrl: './stack-card.css',
})
export class StackCard {
  stackCard = input.required<StackCardData>();
}
