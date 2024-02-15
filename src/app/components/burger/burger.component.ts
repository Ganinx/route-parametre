import { Component } from '@angular/core';
import {Burger} from "../../models/burger";
import {NgForOf} from "@angular/common";
import {BurgerService} from "../../services/burger.service";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-burger',
  standalone: true,
  imports: [
    NgForOf,RouterModule
  ],
  templateUrl: './burger.component.html',
  styleUrl: './burger.component.css'
})
export class BurgerComponent {

  burgers:Burger[] = []

  constructor(burgerService:BurgerService) {
    this.burgers = burgerService.burgers;
  }


}
