import { Component, inject } from '@angular/core';
import { Button } from '../shared/button/button';
import { ButtonService } from '../shared/button/button.service';

@Component({
  selector: 'app-contact-full',
  imports: [Button],
  templateUrl: './contact-full.html',
  styleUrl: './contact-full.css',
    host: {
    'data-lenis-prevent': '',
  },
})
export class ContactFull {
  buttonService = inject(ButtonService);

  buttons = {
    email: this.buttonService.emailBtnXl,
    github: this.buttonService.githubBtnXl,
    linkedin: this.buttonService.linkedinBtnXl
  }
}
