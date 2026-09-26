import { Component, input } from '@angular/core';
import { ProjectData } from './project.model';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-project-card',
  imports: [Button],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  project = input.required<ProjectData>();

  get buttonText() {
    return this.project().liveWebsiteLink ? 'explorar website' : 'explorar';
  }
}
