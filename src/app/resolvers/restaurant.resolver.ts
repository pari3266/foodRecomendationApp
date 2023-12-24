import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { UserFacade } from "../data-store/user-store/user.facade";

@Injectable({providedIn: 'root'})
export class restaurantResolver implements Resolve<boolean> {
    constructor(private userFacade: UserFacade,) {
        
    }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        // const restaurantId = route.paramMap.get('id');
        await Promise.all([
            this.userFacade.fetchUsers().then((value: any) => {
                console.log(value.payload);
                
            })
        ])
        return true;
    }
}