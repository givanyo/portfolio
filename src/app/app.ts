import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { About } from './about/about';
import { Stack } from './stack/stack';
import { Projects } from './projects/projects';
@Component({
  selector: 'app-root',
  imports: [Header, About, Stack, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
