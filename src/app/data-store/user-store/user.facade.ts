import { Injectable } from "@angular/core";
import { RestaurantService } from "../../api/restaurant.service";
import { Select } from "@ngxs/store";
import { fetchUsersAction, userState } from "./user.store";
import { Observable } from "rxjs";
import { User } from "../../models/user";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";

@Injectable({
    providedIn: 'root'
})

export class UserFacade {

    @Select(userState.users) users$: Observable<User[]> | undefined
    constructor(private restaurantService: RestaurantService) {

    }

    @Dispatch()
    async fetchUsers() {
        const usersObservable = this.restaurantService.getUsers();
        try {
            const users = await usersObservable.toPromise();
            if (users !== undefined) {
                return new fetchUsersAction(users);
            } else {
                console.error('uers is undefined');
            }
        } catch (error) {
            console.error('error fetching users', error);
        }
        return null;
    }
}