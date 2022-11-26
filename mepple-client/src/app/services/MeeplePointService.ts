import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { MeeplePointModel } from '../models/MeeplePointModel';
import { MeepleRankModel } from '../models/MeepleRankModel';
@Injectable({
    providedIn: 'root'
})
export class MeeplePointService {

    constructor(private router: Router,
        private httpClient: HttpClient) { }


    getAllMeeplePoint = () => {
        return this.httpClient.get<MeeplePointModel[]>(environment.apiUrl + "/point");
    }

    getDeleteMeeplePoint = (pointId:string) => {
        return this.httpClient.delete<MeeplePointModel>(environment.apiUrl + `/point/${pointId}`);
    }

    getMeeplePointByUserId = () => {
        return this.httpClient.get<MeeplePointModel[]>(environment.apiUrl + "/point/user/60700a77-74fb-4feb-afdb-a7eddce4dd3f");
    }

    postMeeplePoint = (meeplePointModel: MeeplePointModel, userId: string) => {
        return this.httpClient.post<MeeplePointModel>(environment.apiUrl + `/point/${userId}`, meeplePointModel);
    }

    getMeepleRank = () => {
        return this.httpClient.get<MeepleRankModel[]>(environment.apiUrl + "/point/rank");
    }

    getMeeplePointByPointId = (pointId: string) => {
        return this.httpClient.get<MeeplePointModel>(environment.apiUrl + `/point/${pointId}`);
    }

    putMeeplePointByPointId = (meeplePointModel: MeeplePointModel, pointId: string) => {
        return this.httpClient.put<MeeplePointModel>(environment.apiUrl + `/point/${pointId}`, meeplePointModel);
    }



}