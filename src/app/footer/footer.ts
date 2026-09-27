import { Component, inject } from '@angular/core';
import { Button } from '../shared/button/button';
import { ButtonService } from '../shared/button/button.service';

@Component({
  selector: 'app-footer',
  imports: [Button],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  buttonService = inject(ButtonService);
}
