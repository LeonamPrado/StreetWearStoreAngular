import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  

  private products: Product[] = [
    new Product(
      'Nike Dunk Light Carbon',
      900,
      'assets/cover/nikeShoes1.png',
      'assets/detail/nikeShoes1.webp',
      'assets/detail/nikeShoes1Zoom.webp',
      1,
      'nike',
      'shoes',
      ''
    ),
    new Product(
      'Nike Dunk Valentines Day',
      750,
      'assets/cover/nikeShoes2.png',
      'assets/detail/nikeShoes2.webp',
      'assets/detail/nikeShoes2Zoom.webp',
      2,
      'nike',
      'shoes',
      ''
    ),
    new Product(
      'Nike Jordan Yellow Ochre',
      1600,
      'assets/cover/nikeShoes3.png',
      'assets/detail/nikeShoes3.webp',
      'assets/detail/nikeShoes3Zoom.webp',
      3,
      'nike',
      'shoes',
      ''
    ),
    new Product(
      'Nike Jordan Distresses Grey',
      1200,
      'assets/cover/nikeShoes4.png',
      'assets/detail/nikeShoes4.webp',
      'assets/detail/nikeShoes4Zoom.webp',
      4,
      'nike',
      'shoes',
      ''
    ),
    new Product(
      'Nike Cortez Valentines Day',
      600,
      'assets/cover/nikeShoes5.png',
      'assets/detail/nikeShoes5.webp',
      'assets/detail/nikeShoes5Zoom.webp',
      5,
      'nike',
      'shoes',
      ''
    ),
    new Product(
      'Nike Dunk Miami Dolphins',
      900,
      'assets/cover/nikeShoes6.png',
      'assets/detail/nikeShoes6.webp',
      'assets/detail/nikeShoes6Zoom.webp',
      6,
      'nike',
      'shoes',
      ''
    ),
    new Product(
      'Vans Ultrarange',
      800,
      'assets/cover/vansShoes1.png',
      'assets/detail/vansShoes1.webp',
      'assets/detail/vansShoes1Zoom.webp',
      7,
      'vans',
      'shoes',
      ''
    ),
    new Product(
      'Vans Old Skool Pro',
      450,
      'assets/cover/vansShoes2.png',
      'assets/detail/vansShoes2.webp',
      'assets/detail/vansShoes2Zoom.webp',
      8,
      'vans',
      'shoes',
      ''
    ),
    new Product(
      'Vans X Hockey Skate',
      300,
      'assets/cover/vansShoes3.png',
      'assets/detail/vansShoes3.webp',
      'assets/detail/vansShoes3Zoom.webp',
      9,
      'vans',
      'shoes',
      ''
    ),
    new Product(
      'Vans X Breana Geering',
      350,
      'assets/cover/vansShoes4.png',
      'assets/detail/vansShoes4.webp',
      'assets/detail/vansShoes4Zoom.webp',
      10,
      'vans',
      'shoes',
      ''
    ),
    new Product(
      'Vans Old Skoolform',
      400,
      'assets/cover/vansShoes5.png',
      'assets/detail/vansShoes5.webp',
      'assets/detail/vansShoes5Zoom.webp',
      11,
      'vans',
      'shoes',
      ''
    ),
    new Product(
      'Vans Skate Sk8 Hi',
      500,
      'assets/cover/vansShoes6.png',
      'assets/detail/vansShoes6.webp',
      'assets/detail/vansShoes6Zoom.webp',
      12,
      'vans',
      'shoes',
      ''
    ),
    new Product(
      'Adidas Adimatic',
      700,
      'assets/cover/adidasShoes1.png',
      'assets/detail/adidasShoes1.webp',
      'assets/detail/adidasShoes1Zoom.webp',
      13,
      'adidas',
      'shoes',
      ''
    ),
    new Product(
      'Adidas Busenitz X Dan Mancina',
      500,
      'assets/cover/adidasShoes2.png',
      'assets/detail/adidasShoes2.webp',
      'assets/detail/adidasShoes2Zoom.webp',
      14,
      'adidas',
      'shoes',
      ''
    ),
    new Product(
      'Adidas Samba Adv X F.a',
      800,
      'assets/cover/adidasShoes3.png',
      'assets/detail/adidasShoes3.webp',
      'assets/detail/adidasShoes3Zoom.webp',
      15,
      'adidas',
      'shoes',
      ''
    ),
    new Product(
      'Adidas Adi 2000',
      750,
      'assets/cover/adidasShoes4.png',
      'assets/detail/adidasShoes4.webp',
      'assets/detail/adidasShoes4Zoom.webp',
      16,
      'adidas',
      'shoes',
      ''
    ),
    new Product(
      'Adidas X Dime Busenitz Vulc',
      400,
      'assets/cover/adidasShoes5.png',
      'assets/detail/adidasShoes5.webp',
      'assets/detail/adidasShoes5Zoom.webp',
      17,
      'adidas',
      'shoes',
      ''
    ),
    new Product(
      'Adidas Lwst',
      550,
      'assets/cover/adidasShoes6.png',
      'assets/detail/adidasShoes6.webp',
      'assets/detail/adidasShoes6Zoom.webp',
      18,
      'adidas',
      'shoes',
      ''
    ),
    new Product(
      'Ripndip Dont Trip',
      300,
      'assets/cover/ripdipShirt1.png',
      'assets/detail/ripdipShirt1.webp',
      'assets/detail/ripdipShirt1Zoom.webp',
      19,
      'ripndip',
      'shirt',
      ''
    ),
    new Product(
      'Ripndip Good Life',
      250,
      'assets/cover/ripdipShirt2.png',
      'assets/detail/ripdipShirt2.webp',
      'assets/detail/ripdipShirt2Zoom.webp',
      20,
      'ripndip',
      'shirt',
      ''
    ),
    new Product(
      'Ripndip Runaway',
      225,
      'assets/cover/ripdipShirt3.png',
      'assets/detail/ripdipShirt3.webp',
      'assets/detail/ripdipShirt3Zoom.webp',
      21,
      'ripndip',
      'shirt',
      ''
    ),
    new Product(
      'Primitive X Marvel Carnage',
      250,
      'assets/cover/primitiveShirt1.png',
      'assets/detail/primitiveShirt1.webp',
      'assets/detail/primitiveShirt1Zoom.webp',
      22,
      'primitive',
      'shirt',
      ''
    ),
    new Product(
      'Primitive X Marvel Deapool White',
      250,
      'assets/cover/primitiveShirt2.png',
      'assets/detail/primitiveShirt2.webp',
      'assets/detail/primitiveShirt2Zoom.webp',
      23,
      'primitive',
      'shirt',
      ''
    ),
    new Product(
      'Primitive X Marvel Deapool Black',
      300,
      'assets/cover/primitiveShirt3.png',
      'assets/detail/primitiveShirt3.webp',
      'assets/detail/primitiveShirt3Zoom.webp',
      24,
      'primitive',
      'shirt',
      ''
    ),
  ];

  getProducts() {
    return this.products;
  }
  getProductById(id) {
    return this.products.map((a)=>a).filter((p) => p.id === id);
  }
  getProductByBrand(brand) {
    return this.products.filter((p) => p.brand === brand);
  }
}
