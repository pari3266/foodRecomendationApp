import { Component } from '@angular/core';
import { NewRestaurantsListComponent } from "./new-restaurants-list/new-restaurants-list.component";
import { TasteOfPeopleComponent } from "./taste-of-people/taste-of-people.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NewRestaurantsListComponent, TasteOfPeopleComponent]
})
export class HomeComponent {

}
