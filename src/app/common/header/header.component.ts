import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  cartLength: number
  constructor(private cartService: CartService){
  }
  ngOnInit(){
    this.cartLength = this.cartService.getCartProducts().length
    this.cartService.cartLength.subscribe(
      (length)=>{
        this.cartLength = length
      }
    )
  }
}
