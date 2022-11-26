import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/CardModel';
import { MeepleRankModel } from '../../models/MeepleRankModel';
import { NotifierService } from 'angular-notifier';
import { MeeplePointService } from '../../services/MeeplePointService';

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
  constructor(private meeplePointService: MeeplePointService, notifierService: NotifierService) {
    this.notifier = notifierService;

  }

  ngOnInit(): void {
    this.loadPoints();
  }

  loadPoints(): void {

    this.meeplePointService.getMeepleRank().subscribe((data) => {

      data.forEach(element => {
        console.log(element.point);
        this.pointList.push(element);
      });

    });

  }

  addCard(id: number): void {
    console.log("add card : ", id);
  }

}
