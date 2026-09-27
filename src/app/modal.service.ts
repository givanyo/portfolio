import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  displayContactModal = signal(false);
  displayStackModal = signal(false);

  isShowingModal = computed(() => this.displayContactModal() || this.displayStackModal());

  constructor() {
    effect(() => {
      this.isShowingModal()
        ? document.body.classList.add('hidden-scrollbar')
        : document.body.classList.remove('hidden-scrollbar');
    });
  }
}
