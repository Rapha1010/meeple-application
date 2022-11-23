import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { UserModel } from './../models/UserModel';
@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private router: Router,
        private httpClient: HttpClient) { }

    postSignUp = (userModel: UserModel) => {
        console.log(userModel);
        return this.httpClient.post(environment.apiUrl + "/users/signup", userModel);
    }

    getSignIn = (email:string, password:string) => {
		return this.httpClient.get<UserModel>(environment.apiUrl + "/users/auth/"+email+"/"+password);
	}

}