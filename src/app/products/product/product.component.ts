import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../../cart/cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @ViewChild('size') size!: ElementRef
  id: number
  product: Product[]
  productSize: string = ''
  
  constructor(private router: ActivatedRoute, private Router: Router ,private productService: ProductService, private cartService: CartService){
  }

  ngOnInit() {
    this.id = +this.router.snapshot.params['id']
    this.product = this.productService.getProductById(this.id)
  }
  onSelected(){
    this.productSize = this.size.nativeElement.value
  }
  onBuy(){
    if(this.productSize === ''){
      return alert('Select the size')
    }
    if(this.cartService.getCartProducts().map((a)=>a).filter((p)=>p.id === this.id && p.size === this.productSize).length !== 0){
      return this.Router.navigate(['/cart'])
    }
    
    this.cartService.addToCart(new Product(this.product[0].name, this.product[0].price,this.product[0].UrlCover,this.product[0].UrlDetail,this.product[0].UrlDetail1,this.product[0].id,this.product[0].brand,this.product[0].type,this.productSize))
    this.cartService.cartLength.next(this.cartService.getCartProducts().length)
    this.Router.navigate(['/cart'])
  }
}
