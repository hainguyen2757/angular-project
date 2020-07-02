import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import { DataTablesModule } from 'angular-datatables';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

import { HttpClientModule } from '@angular/common/http';

import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { SharingService } from './services/sharing.service';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavComponent,
    HomeComponent,
    MainComponent,
    
    CreateAccountComponent,
    LoginComponent,
    LoginLayoutComponent,
    MainLayoutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
     
  ],
  providers: [SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
