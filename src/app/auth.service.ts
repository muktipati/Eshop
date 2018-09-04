import { UserService } from './user.service';
import { AppUser } from './models/app.users';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { observable } from 'rxjs';


import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable<firebase.User>;


  constructor(
    private UserService:UserService,
    private afAuth:AngularFireAuth,
    private route:ActivatedRoute) 
    {
    this.user =afAuth.authState;
   }
   
  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  };
  signOut(){
    this.afAuth.auth.signOut();
  };
  get appUser$():Observable<AppUser>{
    return this.user.pipe(switchMap((user: firebase.User) =>{
   
    if(user){
      return  this.UserService.get(user.uid)
    }
    else{
      return Observable.of(null);
    }
    }))
  }
}
