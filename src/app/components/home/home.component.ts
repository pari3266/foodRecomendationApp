import { Component } from '@angular/core';
import { NewRestaurantsListComponent } from "./new-restaurants-list/new-restaurants-list.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NewRestaurantsListComponent]
})
export class HomeComponent {

}
