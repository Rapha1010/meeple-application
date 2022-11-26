import { Component, OnInit } from '@angular/core';
import { MeeplePointService } from '../../services/MeeplePointService';
import { NotifierService } from 'angular-notifier';
import { MeeplePointModel } from '../../models/MeeplePointModel';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/UserService';
import { UserModel } from 'src/app/models/UserModel';
@Component({
  selector: 'app-manage-points',
  templateUrl: './manage-points.component.html',
  styleUrls: ['./manage-points.component.scss']
})
export class ManagePointsComponent implements OnInit {

  page = 1;
  pageSize = 4;

  filterTerm!: string;

  pointList: Array<MeeplePointModel> = [];
  userList: Array<UserModel> = [];
  selectedOption: string = '';

  meeplePointModel: MeeplePointModel = new MeeplePointModel();

  modalDetails: MeeplePointModel = new MeeplePointModel();

  private readonly notifier: NotifierService;
  constructor(private meeplePointService: MeeplePointService, notifierService: NotifierService,  private userService: UserService) {
    this.notifier = notifierService;

  }

  ngOnInit(): void {
    this.loadPoints();
    this.loadUsers();
  }

  loadPoints(): void {

    this.meeplePointService.getAllMeeplePoint().subscribe((data) => {
      data.forEach(element => {
        this.pointList.push(element);
      });

    });

  }

  loadUsers(): void {

    this.userService.getAllUsers().subscribe((data) => {
        this.userList = data;
    });

  }

  openModel(id: string): void {

    this.pointList.map((item) => {
      if (item.pointId.includes(id)) {
        this.modalDetails = item ;
      }
    })

  }

  onClickAdd(data:NgForm) {
    this.meeplePointModel.point = data.value.point;
    this.meeplePointModel.obs = data.value.obs;
    this.meeplePointService.postMeeplePoint(this.meeplePointModel, this.selectedOption).subscribe(
      {
        next: (data) => { this.notifier.notify('success', 'Pontuação adicionada') },
        error: (err) => { this.notifier.notify('error', err.error.error); }
      }
    );

  }

  onClickEdit(data:NgForm): void {

    this.meeplePointModel.point = data.value.point;
    this.meeplePointModel.obs = data.value.obs;

    this.meeplePointService.putMeeplePointByPointId(this.meeplePointModel, this.modalDetails.pointId).subscribe(
      {
        next: (data) => { this.notifier.notify('success', 'Pontuação alterada') },
        error: (err) => { this.notifier.notify('error', err.error.error); }
      }
    );
  }

  onClickDelete() {

    this.meeplePointService.getDeleteMeeplePoint(this.modalDetails.pointId).subscribe(
      {
        next: (data) => { this.notifier.notify('success', 'Pontuação removida') },
        error: (err) => { this.notifier.notify('error', err.error.error); }
      }
    );
  }

}
