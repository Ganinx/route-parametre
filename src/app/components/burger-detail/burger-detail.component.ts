import {Component, inject, TemplateRef} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {BurgerService} from "../../services/burger.service";
import {Burger} from "../../models/burger";
import {NgForOf, NgIf} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

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
  private modalService = inject(NgbModal);

  burger?:Burger;
  constructor(private activatedRoute:ActivatedRoute,private burgerService:BurgerService) {
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
    this.burger=this.burgerService.getById(id)
  }



}
