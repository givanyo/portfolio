import { Component, inject } from '@angular/core';
import { Button } from '../shared/button/button';
import { ButtonService } from '../shared/button/button.service';

@Component({
  selector: 'app-about',
  imports: [Button],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  buttonService = inject(ButtonService);
  buttons = {
    contato: this.buttonService.contactBtn,
    cv: this.buttonService.cvBtn,
  };
}
