
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class SimpleOAuth {

    isUser() {
        if (localStorage.getItem('email') != null && localStorage.getItem('email') != '' ) return false;

        return true;
    }


}