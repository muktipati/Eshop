import { AppUser } from './../models/app.users';
import { AuthService } from './../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  
appUser:AppUser
  constructor(private auth:AuthService) {
   
   auth.appUser$.subscribe(appUser => this.appUser = appUser)
   }

  ngOnInit() {
  }
  logout(){
    this.auth.signOut();
  }

}
