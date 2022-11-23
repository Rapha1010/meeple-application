import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { MeeplePointModel } from '../models/MeeplePointModel';
@Injectable({
    providedIn: 'root'
})
export class MeeplePointService {

    constructor(private router: Router,
        private httpClient: HttpClient) { }

    getMeeplePoint = () => {
		return this.httpClient.get<MeeplePointModel[]>(environment.apiUrl + "/point");
	}

    postMeeplePoint = (meeplePointModel: MeeplePointModel) => {
        return this.httpClient.post<MeeplePointModel[]>(environment.apiUrl + "/point/60700a77-74fb-4feb-afdb-a7eddce4dd3f", meeplePointModel);
    }

}