import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-new-restaurants-list',
  standalone: true,
  imports: [CardModule,],
  templateUrl: './new-restaurants-list.component.html',
  styleUrl: './new-restaurants-list.component.scss'
})
export class NewRestaurantsListComponent implements OnInit {
  showMore = false;

  // set restaurant model for this and set a fake api
  items = [
    {
      id: 1,
      src: '',
      title: '1',
      description: 'a1'
    },
    {
      id: 2,
      src: '',
      title: '2',
      description: 'a2'
    },
    {
      id: 3,
      src: '',
      title: '3',
      description: 'a3'
    },
    {
      id: 4,
      src: '',
      title: '4',
      description: 'a4'
    },
  ];

  ngOnInit(): void {
    this.showMore = this.items.length > 3 ? true : false
  }
}
