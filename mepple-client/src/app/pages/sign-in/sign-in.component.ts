import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/UserModel';
import { UserService } from '../../services/UserService';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  userModel: UserModel = new UserModel();

  private readonly notifier: NotifierService;
  constructor(private userService: UserService, notifierService: NotifierService) {
    this.notifier = notifierService;

  }

  ngOnInit(): void {
  }

  onClickSubmit(): void {

    this.userService.getSignIn(this.userModel.email, this.userModel.password).subscribe(
      {
        next: (data) => { 
          
          localStorage.setItem('email', data.email);
          localStorage.setItem('user_id', data.userId);
      
      }
      });
  }

}
