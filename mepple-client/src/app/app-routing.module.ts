import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CareerBoardComponent } from './pages/career-board/career-board.component';
import { ManagePointsComponent } from './pages/manage-points/manage-points.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'career', component: CareerBoardComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'manage-points', component: ManagePointsComponent },
  { path: 'manage-users', component: ManageUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
