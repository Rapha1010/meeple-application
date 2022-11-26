import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/UserModel';
import { UserService } from '../../services/UserService';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from "ngx-spinner";
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  userModel: UserModel = new UserModel();

  private readonly notifier: NotifierService;
  constructor(private userService: UserService, notifierService: NotifierService, private spinner: NgxSpinnerService, private router: Router) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }

  onClickSubmit(): void {

    this.spinner.show();
    this.userService.getSignIn(this.userModel.email, this.userModel.password).subscribe(
      {
        next: (data) => {
          this.setLocalStorage(data);
        }
        ,error: (err) => {
          this.spinner.hide();
          this.notifier.notify('error', `status ${err.status} - ${err.error} `);
        }
      });
  }

  setLocalStorage(data:UserModel) {
    localStorage.setItem('email', data.email);
    localStorage.setItem('user_id', data.userId);
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['/home']);
    }, 1500);
  }

}
