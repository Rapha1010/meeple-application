import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CreateBettingComponent } from './pages/create-betting/create-betting.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { MatchPointComponent } from './pages/match-point/match-point.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-betting', component: CreateBettingComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'match-point', component: MatchPointComponent },
  { path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
