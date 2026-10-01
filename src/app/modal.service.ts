import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { LenisService } from './lenis/lenis.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  displayContactModal = signal(false);
  displayStackModal = signal(false);

  lenisService = inject(LenisService);

  isShowingModal = computed(() => this.displayContactModal() || this.displayStackModal());

  constructor() {
    effect(() => {
      if (this.isShowingModal()) {
        document.body.classList.add('hidden-scrollbar');
        this.lenisService.stop();
      } else {
        document.body.classList.remove('hidden-scrollbar');
        this.lenisService.start();
      }
    });
  }
}
