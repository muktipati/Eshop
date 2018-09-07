import { DataTableModule } from 'angular-6-datatable';


import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit  {
  // product :{title:string}[];
  // filterProduct:any[];
  // subscription:Subscription;

  // constructor(private productService:ProductService){

  //   this.subscription = this.productService.getAll().subscribe(product => this.filterProduct = this.product = product);
  //   console.log("this.product",this.product)
  // }


  ngOnInit() {
  }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }
  // filter(search:string){
  //     this.filterProduct = (search)?
  //     this.product.filter(p => p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())):
  //     this.product;
  // }

}
