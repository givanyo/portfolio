import { Component } from '@angular/core';
import { StackCardData } from '../../shared/stack-card/stack-card.model';
import { StackCard } from '../../shared/stack-card/stack-card';

@Component({
  selector: 'app-stack-full',
  imports: [StackCard],
  templateUrl: './stack-full.html',
  styleUrl: './stack-full.css',
})
export class StackFull {
  cards: Record<string, StackCardData[]> = {
    frontEnd: [
      {
        iconPath: '/angular.svg',
        title: 'Angular 21',
      },
      {
        iconPath: '/html.svg',
        title: 'HTML',
      },
      {
        iconPath: '/css.svg',
        title: 'CSS',
      },
      {
        iconPath: '/javascript.svg',
        title: 'JavaScript',
      },
      {
        iconPath: '/typescript.svg',
        title: 'TypeScript',
      },
      {
        iconPath: '/gsap.svg',
        title: 'GSAP'
      }
    ],

    backEnd: [
      {
        iconPath: '/java.svg',
        title: 'Java',
      },
    ],

    db: [
      {
        iconPath: '/mysql.svg',
        title: 'MySQL',
      },
    ],

    others: [
      {
        iconPath: '/figma.svg',
        title: 'Figma',
      },
    ],
  };

  get frontEndCards() {
    return this.cards['frontEnd'];
  }

  get backEndCards() {
    return this.cards['backEnd'];
  }

  get dbCards() {
    return this.cards['db'];
  }

  get otherCards() {
    return this.cards['others'];
  }
}
