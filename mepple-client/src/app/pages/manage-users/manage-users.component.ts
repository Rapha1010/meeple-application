import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { UserService } from '../../services/UserService';
import { UserModel } from '../../models/UserModel';
import { SimpleOAuth } from '../../shared/SimpleOAuth';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

   page = 1;
  pageSize = 4;

  filterTerm!: string;

  userList: Array<UserModel> = [];

  modalDetails: UserModel = new UserModel();
  user: UserModel = new UserModel();
  selectedOption: string = '';

  private readonly notifier: NotifierService;
  constructor(notifierService: NotifierService,  private userService: UserService, protected oAuth:SimpleOAuth, private router: Router) {
    this.notifier = notifierService;

  }

  ngOnInit(): void {

    if (this.oAuth.isUser() == false) this.router.navigate(['/']);

    this.loadUsers();
  }

  loadUsers(): void {

    this.userService.getAllUsers().subscribe((data) => {
        this.userList = data;
    });

  }

  openModel(id: string): void {

    this.userList.map((item) => {
      if (item.userId.includes(id)) {
        this.modalDetails = item ;
      }
    })

  }

  onClickAdd() {

    this.userService.postSignUp(this.user).subscribe(
      {
        next: (data) => { this.notifier.notify('success', 'Usuário adicionado'), location.reload()  },
        error: (err) => { this.notifier.notify('error', err.error.error); }
      }
    );

  }

  onClickEdit(data:NgForm): void {

    this.modalDetails.name = data.value.name;
    this.modalDetails.email = data.value.email;
    this.modalDetails.password = data.value.password;

    this.userService.putUserById(this.modalDetails, this.modalDetails.userId).subscribe(
      {
        next: (data) => { this.notifier.notify('success', 'Usuário alterado'), location.reload() },
        error: (err) => { this.notifier.notify('error', err.error.error); }
      }
    );
  }

  onClickDelete() {

    this.userService.getDeleteUser(this.modalDetails.userId).subscribe(
      {
        next: (data) => { this.notifier.notify('success', 'Usuário removido'), location.reload() },
        error: (err) => { this.notifier.notify('error', err.error.error); }
      }
    );
  }

}
