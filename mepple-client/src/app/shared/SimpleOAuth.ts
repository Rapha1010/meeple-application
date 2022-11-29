
import { Injectable } from '@angular/core';
import { UserModel } from '../models/UserModel';
@Injectable({
    providedIn: 'root'
})
export class SimpleOAuth {

    isUser() {
        if (localStorage.getItem('email') == null 
            || localStorage.getItem('email') == '' ) return false;

        return true;
    }

    isTheCurrentUser(userId:string) {

        if (localStorage.getItem('user_id') == userId) return true;

        return false;
    }

    setLocalStorage(data:UserModel) {
        localStorage.setItem('email', data.email);
        localStorage.setItem('user_id', data.userId);
        localStorage.setItem('user', data.name);
    }

    getLocalStorageUser() {
        return (localStorage.getItem('user') == null ? '' : localStorage.getItem('user')) || '';
    }

}