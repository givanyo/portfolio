import { Injectable, signal } from '@angular/core';
import { ButtonData } from './button.model';

@Injectable({
  providedIn: 'root',
})
export class ButtonService {
  contactBtn = signal<ButtonData>({
    text: 'contato',
    fontSize: 'lg',
    color: 'purple',
    displaySvg: false,
  });

  contactCloseBtn = signal<ButtonData>({
    text: 'contato',
    fontSize: 'md',
    color: 'purple',
    displaySvg: false,
  });

  cvBtn = signal<ButtonData>({
    text: 'cv',
    fontSize: 'lg',
    color: 'green',
    displaySvg: false,
  });

  stackBtn = signal<ButtonData>({
    text: 'ver todas as tecnologias',
    fontSize: 'md',
    color: 'purple',
    displaySvg: true,
  });

  exploreBtn = signal<ButtonData>({
    text: 'explorar',
    fontSize: 'md',
    color: 'purple',
    displaySvg: true,
  });

  exploreWebsiteBtn = signal<ButtonData>({
    text: 'explorar website',
    fontSize: 'md',
    color: 'purple',
    displaySvg: true,
  });

  githubBtn = signal<ButtonData>({
    text: 'github',
    fontSize: 'md',
    color: 'green',
    displaySvg: false,
    link: 'https://github.com/givanyo',
  });
  
  emailBtn = signal<ButtonData>({
    text: 'email',
    fontSize: 'md',
    color: 'green',
    displaySvg: false,
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=giovanniviana22@gmail.com&su=Contato%20pelo%20portfólio&body=Olá!',
  });
}
