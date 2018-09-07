import { map, take } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';



// import 'rxjs/add/operator/take'
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  //newProductID:any;
  constructor(
    private routerLink: ActivatedRoute,
    private route: Router,
     private CategoryService: CategoryService,
    private ProductService: ProductService
  ) {
   
    this.categories$ = CategoryService.getCategories()
    let id = this.routerLink.snapshot.paramMap.get('id');
    if(id) {

      this.ProductService.get(id).subscribe(p => this.product = p)
      console.log("edit_product",this.product)
    }
  //   if (id)
  //   {
  //     debugger; 
  //   this.ProductService.get(id).subscribe(data => {
  //     this.product = data;
  //   })
  //    this.newProductID=this.ProductService.get(id);
  //    console.log(this.newProductID);
  // }
  }

  ngOnInit() {
  }
  save(product) {
    
    this.ProductService.create(product);
    this.route.navigate(['admin/admin-products'])
  }

}
