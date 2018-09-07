import { map, take } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;
  img_url:string= 'product.imgUrl';
  constructor(
    private routerLink: ActivatedRoute,
    private route: Router,
     private CategoryService: CategoryService,
    private ProductService: ProductService
  ) {
   
    this.categories$ = CategoryService.getCategories()
    this.id = this.routerLink.snapshot.paramMap.get('id');
    if(this.id) {
      this.ProductService.get(this.id).pipe(take(1)).subscribe(p => this.product = p)
      console.log("edit_product",this.product)
    }
  }

  ngOnInit() {
  }
  save(product) {
    if(this.id) this.ProductService.update(this.id,product);
    else this.ProductService.create(product);
    
    this.route.navigate(['admin/admin-products'])
  }
  delete(){
    if(!confirm("Are you sure you want to delete this product ")) return;

    this.ProductService.delete(this.id);
    this.route.navigate(['admin/admin-products'])

  }

}
