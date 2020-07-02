import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fauth: AngularFireAuth) { }
  loginFirebase(email: string, password: string){
    return new Promise<any>((resolve, reject) => {
      this.fauth.signInWithEmailAndPassword(email, password)
      .then(res => {       
     
      resolve(res);
      // this.Sharing.isUserLoggedIn.next(true);
      }, err => reject(err))
    })
    
  }

  logout(){
    return new Promise<any>((resolve,reject)=>{
      if (this.fauth.currentUser){
      //if (this.fauth.auth.currentUser){
  
      this.fauth.signOut();
      resolve("log out");
      }else{
      reject();
      }
  
    })
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.fauth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res); //Hàm resolve returns a Promise object that is resolved with a given value
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

}
