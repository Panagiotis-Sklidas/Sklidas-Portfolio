import { Component, Input, input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  imgPath = input();
  title = input();
  descreption = input();
  @Input() stack!: string[];
  @Input() date!: string[];
  link = input();
  url = input<string>();

  ngOnInit() {
    // const startDate = this.date[0];
    // const endDate = this.date[1];
    // const site = this.url();
    console.log('URL:', this.url());
  }
}
