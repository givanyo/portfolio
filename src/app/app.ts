import { Component, signal, inject } from '@angular/core';
import { Header } from './header/header';
import { About } from './about/about';
import { Stack } from './stack/stack';
import { Projects } from './projects/projects';
import { Footer } from './footer/footer';
import { ContactFull } from './contact-full/contact-full';
import { ModalService } from './modal.service';
import { StackFull } from './stack/stack-full/stack-full';
@Component({
  selector: 'app-root',
  imports: [Header, About, Stack, Projects, Footer, ContactFull, StackFull],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
  modalService = inject(ModalService);
  displayContactModal = this.modalService.displayContactModal;
  displayStackModal = this.modalService.displayStackModal;
}
