import { inject, Injectable, signal } from '@angular/core';
import { ButtonData } from './button.model';
import { ModalService } from '../../modal.service';
import { Button } from './button';

@Injectable({
  providedIn: 'root',
})
export class ButtonService {
  modalService = inject(ModalService);

  toggleContactClose = () => {
    if (this.contactCloseBtn().text == 'contato') {
      this.contactCloseBtn.set({ ...this.contactCloseBtn(), text: 'fechar', color: 'white' });
      this.modalService.displayNav.set(false);
      this.modalService.displayContactModal.set(true);
      return;
    }
    this.contactCloseBtn.set({ ...this.contactCloseBtn(), text: 'contato', color: 'purple' });
    this.modalService.displayNav.set(true);
    this.modalService.displayContactModal.set(false);
  };

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
    action: this.toggleContactClose,
  });

  cvBtn = signal<ButtonData>({
    text: 'cv',
    fontSize: 'lg',
    color: 'green',
    displaySvg: false,
    link: '/pdf/curriculo.pdf'
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

  emailBtnXl = signal<ButtonData>({
    text: 'email',
    fontSize: 'xl',
    color: 'green',
    displaySvg: false,
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=giovanniviana22@gmail.com&su=Contato%20pelo%20portfólio&body=Olá!',
  });

  githubBtnXl = signal<ButtonData>({
    text: 'github',
    fontSize: 'xl',
    color: 'green',
    displaySvg: false,
    link: 'https://github.com/givanyo',
  });

  linkedinBtnXl = signal<ButtonData>({
    text: 'linkedin',
    fontSize: 'xl',
    color: 'green',
    displaySvg: false,
    link: 'https://www.linkedin.com/in/giovanni-viana/',
  });
}
