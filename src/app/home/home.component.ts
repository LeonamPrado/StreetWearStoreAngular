import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Product[]


  constructor(private productService : ProductService){}

  ngOnInit() {
    this.products = this.productService.getProducts()
  }
}
