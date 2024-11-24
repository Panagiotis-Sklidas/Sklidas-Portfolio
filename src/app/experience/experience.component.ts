import { Component, OnInit } from '@angular/core';
import { expData } from './experience.data';
import { JobExperience } from './experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  experienceData: JobExperience[] = [];

  skills = [].map((n) => '');

  ngOnInit() {
    this.experienceData = expData.reverse();
  }
}
