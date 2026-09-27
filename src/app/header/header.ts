import { Component, inject } from '@angular/core';
import { Button } from '../shared/button/button';
import { ButtonService } from '../shared/button/button.service';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  buttonService = inject(ButtonService);
}
