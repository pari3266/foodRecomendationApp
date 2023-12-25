import { Injectable, NgModule } from "@angular/core";
import { User } from "../../models/user";
import {Action, NgxsModule, Selector, State, StateContext} from '@ngxs/store';

export interface userStateModel {
    users: User[];
}

export class fetchUsersAction {
    static readonly type = '[USER] fetch users';

    constructor(
        public payload: User[]
    ){}
}

export class fetchAdminsAction {
    static readonly type = '[USER] fetch admins';

    constructor(
        public payload: User[]
    ){}
}

@State<userStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})


@Injectable()
export class userState {

    @Selector()
    public static users(state: userStateModel): User[] {
        return state.users;
    }

    @Action(fetchUsersAction)
    fetchUsers(ctx: StateContext<userStateModel>, action: fetchUsersAction) {
        ctx.setState({
            ...ctx.getState(),
            users: action.payload,
        })
    }
}

@NgModule({
    imports: [
        NgxsModule.forFeature([userState]),
],
})
export class userStore {
}