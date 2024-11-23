import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data.model';
import { initialUserData } from '../constants/initial-user-data.constant';

@Injectable({
    providedIn: 'root',
})
export class UserDataService {
    private _userDataStore: UserData = initialUserData;

    getUserData(): UserData {
        return this._userDataStore;
    }

    setUserData(user: UserData): void {
        this._userDataStore = { ...this._userDataStore, ...user};
    }
}