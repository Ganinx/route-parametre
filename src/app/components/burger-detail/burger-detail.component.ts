import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {BurgerService} from "../../services/burger.service";
import {Burger} from "../../models/burger";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-burger-detail',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './burger-detail.component.html',
  styleUrl: './burger-detail.component.css'
})
export class BurgerDetailComponent {

  burger?:Burger;
  constructor(private activatedRoute:ActivatedRoute,private burgerService:BurgerService) {
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
    this.burger=this.burgerService.getById(id)

  }
}
