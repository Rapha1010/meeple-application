import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/UserModel';
import { UserService } from '../../services/UserService';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userModel: UserModel = new UserModel();
  

  private readonly notifier: NotifierService;
  constructor(private userService: UserService, notifierService: NotifierService, private router: Router) {
    this.notifier = notifierService;

  }

  ngOnInit(): void {
  }

  onClickSubmit(): void {

    this.userService.postSignUp(this.userModel).subscribe(
      {
        next: (data) => { this.tranfer() },
        error: (err) => { this.notifier.notify('error', err.error.error); }
      }
    );

  }

  tranfer() {
    this.notifier.notify('success', 'Usuário cadastrado com sucesso')
    setTimeout(() => {
      this.router.navigate(['/sign-in']);
    }, 2000);
  }

}


