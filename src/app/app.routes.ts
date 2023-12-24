import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestaurantPageComponent } from './components/restaurants/restaurant-page/restaurant-page.component';
import { restaurantResolver } from './resolvers/restaurant.resolver';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'restaurantPage/:id',
        component: RestaurantPageComponent,
        resolve: { restaurantData: restaurantResolver },
    }
];