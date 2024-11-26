import { Component, OnInit } from '@angular/core';
import { Certification } from './certification.model';
import { certData } from './certification.data';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [];

  ngOnInit() {
    this.certifications = [...certData].reverse();
  }
}
