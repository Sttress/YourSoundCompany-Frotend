import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/general/home/home-page';
import { LoginPage } from './pages/account/login/login-page';
import { DashBoardPage } from './pages/general/dashboard/dashboard-page';
import { CommonModule } from '@angular/common';
import { FramePageComponent } from './pages/general/frame/frame-page.component';
import { UserCreatePage } from './pages/account/user/create/user-create-page';

const routes: Routes = [
  { path:'',component:HomePage },
  { path:'login',component:LoginPage},
  { path:'user-create',component:UserCreatePage},
  {
    path:'dashboard',
    component:FramePageComponent,
    children: [
      {path:'dashboard', component:DashBoardPage}
    ]
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
