import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {Burger} from "../../models/burger";
import {BurgerService} from "../../services/burger.service";
import {Pizza} from "../../models/pizza";
import {PizzaService} from "../../services/pizza.service";

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})
export class PizzaComponent {
  pizzas:Pizza[] = []

  constructor(pizzaService:PizzaService) {
    this.pizzas = pizzaService.pizzas;
  }
}
