import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Pizza} from "../../models/pizza";
import {NgForOf} from "@angular/common";
import {PizzaService} from "../../services/pizza.service";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ajout-pizza',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './ajout-pizza.component.html',
  styleUrl: './ajout-pizza.component.css'
})
export class AjoutPizzaComponent {

  news = new Pizza();
  newsIsVege = [false,true]

  OnSubmit(){
    this.pizzaService.add(this.news)
    this.router.navigate(['/pizza']);
    this.toastr.success('Pizza ajouté !', 'Notification d\'achat');
  }
  constructor(private pizzaService: PizzaService, private router: Router,private toastr: ToastrService) {

  }

}
