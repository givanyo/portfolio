import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  displayContactModal = signal(false);
  displayNav = signal(true);

  isShowingModal = computed(() => this.displayContactModal() == true)
  
  constructor() {
    effect(() => {
      this.isShowingModal() ? document.body.classList.add('hidden-scrollbar') : document.body.classList.remove('hidden-scrollbar');
    })
  }
}
