import { Component } from '@angular/core';
import {Burger} from "../../models/burger";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {BurgerService} from "../../services/burger.service";
import {Pizza} from "../../models/pizza";
import {PizzaService} from "../../services/pizza.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-pizza-detail',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './pizza-detail.component.html',
  styleUrl: './pizza-detail.component.css'
})
export class PizzaDetailComponent {
  pizza?:Pizza;
  constructor(private activatedRoute:ActivatedRoute,private pizzaService:PizzaService) {
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
    this.pizza=this.pizzaService.getById(id)
  }
}
