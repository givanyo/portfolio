import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { About } from './about/about';
import { Stack } from './stack/stack';
@Component({
  selector: 'app-root',
  imports: [Header, About, Stack],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
