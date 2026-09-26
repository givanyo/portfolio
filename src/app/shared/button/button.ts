import { Component, HostListener, input } from '@angular/core';
import { ButtonData } from './button.model';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @HostListener('click')
  onClick() {
    this.button().action?.();
  }
  button = input.required<ButtonData>();
}
