import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  @ViewChild('qtd') qtd!: ElementRef;
  cartProducts: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProducts();
  }
  onSelected(i: number) {
    this.cartProducts[i].qtd = +this.qtd.nativeElement.value
  }

  onRemove(i: number) {
    this.cartService.removeProduct(i);
    this.cartService.cartLength.next(this.cartService.getCartProducts().length);
  }
}
