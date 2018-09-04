import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor(private auth:AuthService,private router:Router) {

   }

  canActivate(route,state:RouterStateSnapshot){ 
  
    if(firebase.auth().currentUser){
      return true
    }else{
      this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}})
      return false;
  }
}
}