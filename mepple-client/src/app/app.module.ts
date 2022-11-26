import { NgModule } from '@angular/core';
import { NotifierModule } from 'angular-notifier';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { MatchPointComponent } from './pages/match-point/match-point.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CareerBoardComponent } from './pages/career-board/career-board.component';
import { ManagePointsComponent } from './pages/manage-points/manage-points.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    MatchPointComponent,
    SignUpComponent,
    CareerBoardComponent,
    ManagePointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    NotifierModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

