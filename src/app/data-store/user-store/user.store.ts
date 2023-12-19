import { Injectable, NgModule } from "@angular/core";
import { User } from "../../models/user";
import {Action, NgxsModule, Selector, State, StateContext} from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

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
            ...ctx.getState()
        })
    }
}

@NgModule({
    imports: [
        NgxsModule.forFeature([userState]),
        // NgxsReduxDevtoolsPluginModule.forRoot(),
        // NgxsLoggerPluginModule.forRoot(),
],
})
export class userStore {
}