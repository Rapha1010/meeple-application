import { Component, OnInit } from '@angular/core';
import { MeeplePointService } from '../../services/MeeplePointService';
import { NotifierService } from 'angular-notifier';
import { MeeplePointModel } from '../../models/MeeplePointModel';
@Component({
  selector: 'app-manage-points',
  templateUrl: './manage-points.component.html',
  styleUrls: ['./manage-points.component.scss']
})
export class ManagePointsComponent implements OnInit {

  meeplePointModel: MeeplePointModel = new MeeplePointModel();

  private readonly notifier: NotifierService;
  constructor(private meeplePointService: MeeplePointService, notifierService: NotifierService) {
    this.notifier = notifierService;

  }

  ngOnInit(): void {
  }

  onClickSubmit(): void {
    this.meeplePointService.postMeeplePoint(this.meeplePointModel).subscribe(
      { 
        next: (data) => { this.notifier.notify('success', 'Usuário cadastrado com sucesso') }, 
        error: (err) => { this.notifier.notify('error', err.error.error); } 
      }
    );
  }

}
