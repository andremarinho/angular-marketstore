import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items : any[] = [];

     addToCart(product) {
       
        this.items.push(product);
     }

    getItens(){

      return this.items;

    }

    clearCard(){
      this.items = [];
      return this.items;
    }
  
  
  
  constructor() { 

    

  }

}