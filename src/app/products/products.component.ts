import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productsByBrand: Product[]
  brand: string

  constructor( private productService: ProductService, private router: ActivatedRoute){}

ngOnInit(){
  this.brand = this.router.snapshot.params['brand']
  this.productsByBrand = this.productService.getProductByBrand(this.brand)
  this.router.params.subscribe(
    (params: Params)=>{
      this.brand = this.router.snapshot.params['brand']
      this.productsByBrand = this.productService.getProductByBrand(this.brand)
    }
  )
}

}
