import { Component, OnInit } from '@angular/core';
import { MeeplePointModel } from '../../models/MeeplePointModel';
import { NotifierService } from 'angular-notifier';
import { MeeplePointService } from '../../services/MeeplePointService';

@Component({
  selector: 'app-career-board',
  templateUrl: './career-board.component.html',
  styleUrls: ['./career-board.component.scss']
})
export class CareerBoardComponent implements OnInit {

  page = 1;
  pageSize = 4;

  filterTerm!: string;

  pointList: Array<MeeplePointModel> = [];
  point: MeeplePointModel = new MeeplePointModel();

  private readonly notifier: NotifierService;
  constructor(private meeplePointService: MeeplePointService, notifierService: NotifierService) {
    this.notifier = notifierService;

  }

  ngOnInit(): void {
    this.loadPoints();
  }

  loadPoints(): void {

    this.meeplePointService.getMeeplePoint().subscribe((data) => {
      data.forEach(element => {
        this.pointList.push(element);
      });

    });

  }

  addCard(id: number): void {
    console.log("add card : ", id);
  }

}
