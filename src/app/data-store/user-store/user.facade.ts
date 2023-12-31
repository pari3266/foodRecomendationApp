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

    @Select(userState.users) users$!: Observable<User[]>;

    constructor(private restaurantService: RestaurantService) {

    }

    @Dispatch()
    async fetchUsers() {
        const users = await this.restaurantService.getUsers();

        return new fetchUsersAction(users);
    }
}