import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/CardModel';
import { MeepleRankModel } from '../../models/MeepleRankModel';
import { NotifierService } from 'angular-notifier';
import { MeeplePointService } from '../../services/MeeplePointService';
import { SimpleOAuth } from '../../services/SimpleOAuth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page = 1;
  pageSize = 4;

  filterTerm!: string;

  pointList: Array<MeepleRankModel> = [];
  point: MeepleRankModel = new MeepleRankModel();

  private readonly notifier: NotifierService;
  constructor(private meeplePointService: MeeplePointService, notifierService: NotifierService, private oAuth:SimpleOAuth, private router: Router) {
    this.notifier = notifierService;

  }

  ngOnInit(): void {

    if (this.oAuth.isUser() == false) this.router.navigate(['/']);

    this.loadPoints();
  }

  loadPoints(): void {

    this.meeplePointService.getMeepleRank().subscribe((data) => {

      data.forEach(element => {
        this.pointList.push(element);
      });

    });

  }

  addCard(id: number): void {
    console.log("add card : ", id);
  }

}
