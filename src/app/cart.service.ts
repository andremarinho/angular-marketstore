import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

    getShippingPrices(){
      return this.http.get('/assets/shipping.json');
    }
  
  
  
  constructor(
    private http: HttpClient
  ) { 

    

  }

}