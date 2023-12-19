import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { UserFacade } from "../data-store/user-store/user.facade";

@Injectable()
export class restaurantResolver implements Resolve<boolean> {
    constructor(private userFacade: UserFacade,) {
        
    }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        // const restaurantId = route.paramMap.get('id');

        console.log(this.userFacade.fetchUsers())
        await Promise.all([
            this.userFacade.fetchUsers(),
        ])
        return true;
    }
}