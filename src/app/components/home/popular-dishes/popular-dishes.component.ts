import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-popular-dishes',
  standalone: true,
  imports: [CardModule],
  templateUrl: './popular-dishes.component.html',
  styleUrl: './popular-dishes.component.scss'
})
export class PopularDishesComponent {
  items = [
    {
      id: 1,
      src: '',
      username: 'p',
      foodname: 'test1',
    },
    {
      id: 2,
      src: '',
      username: 'a',
      foodname: 'test2',
    },
    {
      id: 3,
      src: '',
      username: 's',
      foodname: 'test3',
    },

  ]
}
