import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SimpleOAuth } from './shared/SimpleOAuth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rapha-app';
  user: string = '';

  constructor(protected oAuth: SimpleOAuth, private router: Router, private spinner: NgxSpinnerService) { }


  ngOnInit() {
      this.user = this.oAuth.getLocalStorageUser();
  }

  logout() {
      this.spinner.hide();
      localStorage.removeItem('user_id');
      localStorage.removeItem('email');
      localStorage.removeItem('user');
      localStorage.clear();
      window.location.reload();
      this.router.navigate(['/']);
  }

}
