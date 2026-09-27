import { Component, inject, input } from '@angular/core';
import { ProjectData } from './project.model';
import { Button } from '../../shared/button/button';
import { ButtonService } from '../../shared/button/button.service';

@Component({
  selector: 'app-project-card',
  imports: [Button],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  project = input.required<ProjectData>();
  buttonService = inject(ButtonService);

  get button() {
    return this.project().liveWebsiteLink
      ? { ...this.buttonService.exploreWebsiteBtn(), link: this.project().liveWebsiteLink }
      : { ...this.buttonService.exploreBtn(), link: this.project().githubLink };
  }
}
