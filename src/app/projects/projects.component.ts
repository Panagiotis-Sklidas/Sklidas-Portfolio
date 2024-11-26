import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { proData } from './project.data';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  ngOnInit() {
    this.projects = [...proData].reverse();
  }
}
