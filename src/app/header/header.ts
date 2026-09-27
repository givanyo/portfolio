import { Component, inject } from '@angular/core';
import { Button } from '../shared/button/button';
import { ButtonService } from '../shared/button/button.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  buttonService = inject(ButtonService);
  modalService = inject(ModalService);
  scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  });
}
}
