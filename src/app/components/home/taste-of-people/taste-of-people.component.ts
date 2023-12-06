import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-taste-of-people',
  standalone: true,
  imports: [CardModule,],
  templateUrl: './taste-of-people.component.html',
  styleUrl: './taste-of-people.component.scss'
})
export class TasteOfPeopleComponent  implements OnInit {
  showMore = false;

  // set people's taste model for this and set a fake api
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
