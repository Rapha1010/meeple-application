import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/UserModel';
import { UserService } from '../../services/UserService';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  userModel:UserModel = new UserModel();

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onClickSubmit(): void {
    this.userService.getSignIn(this.userModel).subscribe((data)=> { console.log(data) });
  }

}
