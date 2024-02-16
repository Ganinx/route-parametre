import { Injectable } from '@angular/core';
import {Burger} from "../models/burger";
import {Pizza} from "../models/pizza";
import {PizzaComponent} from "../components/pizza/pizza.component";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  pizzas : Pizza[] = []



  constructor() {
    let pizza1 =     new Pizza(1,"Reine","tomate",25,false,"https://img.cuisineaz.com/660x660/2016/04/28/i96018-pizza-reine.jpg");
    let pizza2 =  new Pizza(2,"Hawaienne","Tomate",20,true,"data:image/jpeg;base64,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");
    this.pizzas.push(pizza1);
    this.pizzas.push(pizza2)
  }
  getById(id:number):Pizza{
    return this.pizzas.filter(pizza => pizza.id == id)[0];
  }

  add(pizza: Pizza){
    let id : number=this.pizzas.length + 1

    pizza.id = id

    this.pizzas.push(pizza)
  }

  remove(pizzaRemove:Pizza): Pizza[]{
    this.pizzas = this.pizzas.filter(pizza => pizza !==pizzaRemove  )
    return this.pizzas
  }
}
