import { Injectable } from "@angular/core";
import { Product } from "../products/product.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})

export class CartService{
  public cartProducts: Product[] = []

  cartLength = new Subject<number>()

  getCartProducts(){
    return this.cartProducts
  }

  removeProduct(i: number){
  return this.cartProducts.splice(i,1)
  }

  addToCart(product: Product){  
    let a = product
    this.cartProducts.push(a)
  }
}