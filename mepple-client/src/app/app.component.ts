import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleOAuth } from './services/SimpleOAuth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rapha-app';

  constructor(protected oAuth:SimpleOAuth,private router: Router){}
  
  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
