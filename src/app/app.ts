import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { About } from './about/about';
@Component({
  selector: 'app-root',
  imports: [Header, About],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
