import { Component, OnInit } from '@angular/core';
import { MeeplePointModel } from '../../models/MeeplePointModel';
import { NotifierService } from 'angular-notifier';
import { MeeplePointService } from '../../services/MeeplePointService';
import { SimpleOAuth } from '../../shared/SimpleOAuth';
import { Router } from '@angular/router';

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
  constructor(private meeplePointService: MeeplePointService, notifierService: NotifierService, private oAuth:SimpleOAuth, private router: Router) {
    this.notifier = notifierService;

  }

  ngOnInit(): void {
    if (this.oAuth.isUser() == false) this.router.navigate(['/']);
    
    this.loadPoints();
  }

  loadPoints(): void {
    const userId = (localStorage.getItem('user_id') == null ? '' : localStorage.getItem('user_id'));

    this.meeplePointService.getMeeplePointByUserId(userId || '').subscribe((data) => {
      data.forEach(element => {
        this.pointList.push(element);
      });

    });

  }

  addCard(id: number): void {
    console.log("add card : ", id);
  }

}
