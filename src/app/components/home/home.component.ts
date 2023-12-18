import { Component } from '@angular/core';
import { NewRestaurantsListComponent } from "./new-restaurants-list/new-restaurants-list.component";
import { TasteOfPeopleComponent } from "./taste-of-people/taste-of-people.component";
import { PopularDishesComponent } from "./popular-dishes/popular-dishes.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NewRestaurantsListComponent, TasteOfPeopleComponent, PopularDishesComponent, FooterComponent]
})
export class HomeComponent {

}
