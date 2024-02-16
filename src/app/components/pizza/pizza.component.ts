import {Component, inject, TemplateRef} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {Burger} from "../../models/burger";
import {BurgerService} from "../../services/burger.service";
import {Pizza} from "../../models/pizza";
import {PizzaService} from "../../services/pizza.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";

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

  private modalService = inject(NgbModal)

  constructor(private pizzaService:PizzaService, private toastr: ToastrService) {
    this.pizzas = pizzaService.pizzas;
  }

  openDelete(content: TemplateRef<any>,pizza:Pizza) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.pizzas = this.pizzaService.remove(pizza)
        this.toastr.error('Suppression de '+ pizza.nom)
      }
    );
  }
}
