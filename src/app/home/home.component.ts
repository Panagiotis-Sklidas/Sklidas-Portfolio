import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private meta: Meta) {
    meta.addTags([
      {
        name: 'description',
        content:
          "Panagiotis Skidas' portfolio website. Here you will be able to find all my projects and skills.",
      },
      {
        name: 'keywords',
        content: 'Angular, SEO, Home, Portfolio, Web, Panagiotis Sklidas',
      },
      { name: 'author', content: 'Panagiotis Sklidas' },
      { property: 'og:title', content: 'Sklidas Panagiotis Portfolio' },
      {
        property: 'og:description',
        content:
          "Panagiotis Skidas' portfolio website. Here you will be able to find all my projects and skills.",
      },
      { property: 'og:type', content: 'website' },
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}
