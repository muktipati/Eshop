import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }
  create(product){
    return this.db.list('/product').push(product);
  }
  getAll(){
    return  this.db.list('/product')
  }
  get(productId){
    debugger;
    console.log(productId);
    return this.db.object('/product') + productId  
  }
}