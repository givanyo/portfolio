import { Component } from '@angular/core';
import { ProjectCard } from './project-card/project-card';
import { ProjectData } from './project-card/project.model';
@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: ProjectData[] = [
    {
      id: 0,
      orientation: 'vertical',
      imgPath: 'mines.png',
      title: 'DS BET: Mines',
      description:
        'Jogo interativo desenvolvido em grupo para a ETEC de Guarulhos usando HTML, CSS e JS.',
      githubLink: 'https://github.com/Gouveak/Mines-Cassino/tree/sem-bd',
    },

    {
      id: 1,
      orientation: 'horizontal',
      imgPath: 'java-locacao.png',
      title: 'Sistema de Locação de Carros',
      description: 'Sistema de locação de carros feito em Java com JDBC e MySQL.',
      githubLink: 'https://github.com/givanyo/java-locacao-carros',
    },

    {
      id: 2,
      orientation: 'horizontal',
      imgPath: 'angular-todo.png',
      title: 'To-do List Angular',
      description:
        'Lista de tarefas desenvolvida em Angular. Meu primeiro projeto usando a framework.',
      githubLink: 'https://github.com/givanyo/angular-todo',
      liveWebsiteLink: 'https://givanyo-angular-todo.vercel.app/',
    },

    {
      id: 3,
      orientation: 'vertical',
      imgPath: 'angular-calculadora.png',
      title: 'Calculadora com Signals',
      description:
        'Calculadora desenvolvida em Angular, com suporte ao teclado e gerenciamento de estado reativo com Signals.',
      githubLink: 'https://github.com/givanyo/angular-todo',
      liveWebsiteLink: 'https://givanyo-angular-calculator.vercel.app/',
    },
  ];

  get firstColumn() {
    return this.projects.filter((project) => project.id < this.projects.length / 2);
  }
  get secondColumn() {
    return this.projects.filter((project) => project.id >= this.projects.length / 2);
  }
}
