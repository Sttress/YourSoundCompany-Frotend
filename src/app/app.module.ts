import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/general/home/home-page';
import { LoginPage } from './pages/account/login/login-page';
import { DashBoardPage } from './pages/general/dashboard/dashboard-page';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FramePageModule } from './pages/general/frame/frame-page.module';
import { UserCreatePage } from './pages/account/user/create/user-create-page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    LoginPage,
    DashBoardPage,
    UserCreatePage
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FramePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
