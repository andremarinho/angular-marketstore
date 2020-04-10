import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '..products';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  itens: [];

    addToCard(product){

      this.itens.push(product);
    }

    getItens(){

      return this.itens;

    }

    clearCard(){
      this.itens = [];
      return this.itens;
    }
  
  
  
  constructor() { 

    

  }

}