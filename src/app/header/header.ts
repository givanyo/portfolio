import { AfterViewInit, Component, inject } from '@angular/core';
import { Button } from '../shared/button/button';
import { ButtonService } from '../shared/button/button.service';
import { ModalService } from '../modal.service';
import { GsapService } from '../animation/gsap.service';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements AfterViewInit {
  paragraphCount = Array(12);
  gsapService = inject(GsapService);
  buttonService = inject(ButtonService);
  modalService = inject(ModalService);
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  }
  ngAfterViewInit() {
    this.gsapService.init();
    const filmRoll = document.querySelector('.film-roll');

    filmRoll?.addEventListener('mouseenter', () => {
      this.gsapService.filmRoll();
    });

    filmRoll?.addEventListener('mouseleave', () => {
      this.gsapService.filmRollReverse();
    });
  }
}
