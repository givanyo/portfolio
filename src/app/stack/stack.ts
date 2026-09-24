import { Component } from '@angular/core';
import { CardContent } from '../shared/card/card.model';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-stack',
  imports: [Card],
  templateUrl: './stack.html',
  styleUrl: './stack.css',
})
export class Stack {
  cards: CardContent[] = [
    {
      id: 3,
      title: 'Figma',
      content: 'É a ferramenta que eu uso para planejar o layout antes do desenvolvimento.',
      iconPath: 'figma.svg',
    },
    {
      id: 1,
      title: 'Angular',
      content:
        'É a tecnologia que utilizo para desenvolver páginas web, suas funcionalidades e a interação com o usuário.',
      iconPath: 'angular.svg',
    },
    {
      id: 2,
      title: 'Java',
      content: 'É a tecnologia que eu uso no desenvolvimento backend de alguns projetos.',
      iconPath: 'java.svg',
    },
  ];

  get sortedCards() {
    return this.cards.sort((a, b) => a.id - b.id);
  }
}
