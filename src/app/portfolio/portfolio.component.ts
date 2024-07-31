import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  datas = [
    {
      title: 'Item 1',
    },
    {
      title: 'Item 2',
    },

    {
      title: 'Item 3',
    },

    {
      title: 'Item 4',
    },

    {
      title: 'Item 5',
    },

    {
      title: 'Item 6',
    },
  ];
}
