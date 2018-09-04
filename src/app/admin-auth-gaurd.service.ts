import { AppUser } from './models/app.users';
import { UserService } from './user.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { map, switchMap } from 'rxjs/operators';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurd implements CanActivate {

  constructor(private auth:AuthService,private userservice:UserService) { }
  // canActivate():Observable<boolean>{
  // return this.auth.user
  // .switchMap(user => this.userservice.get(user.uid))
  // .map(AppUser => AppUser.isAdmin);

  // }
  canActivate(): Observable<boolean> {
    return this.auth.appUser$.pipe(
      
      map((appUser) => appUser.isAdmin));
   }
}
