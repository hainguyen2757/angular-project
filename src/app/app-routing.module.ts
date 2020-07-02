import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [

  {path:"login",component:LoginLayoutComponent,canActivate:[AuthGuard]},
  
  {path:"admin",component:MainLayoutComponent,
  canActivate:[AuthGuard],
  children:[
    {path:"main",component:MainComponent},
    {path:"signup",component:CreateAccountComponent},
    {path:"home",component:HomeComponent,canActivate:[AuthGuard]}
    
  ]},
  {path:"**",component:LoginLayoutComponent},

  // {path:"**",component:MainLayoutComponent,canActivate:[AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
