import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Burger} from "../../models/burger";
import {BurgerService} from "../../services/burger.service";

@Component({
  selector: 'app-ajout-burger',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf
    ],
  templateUrl: './ajout-burger.component.html',
  styleUrl: './ajout-burger.component.css'
})
export class AjoutBurgerComponent {

  news = new Burger();
  newsIsVege = [false,true]

  OnSubmit(){
    this.burgerService.add(this.news)
    this.router.navigate(['/burger']);
    this.toastr.success('Burger ajouté !', 'Notification d\'achat');
    console.log(this.news)
  }
  constructor(private burgerService: BurgerService, private router: Router,private toastr: ToastrService) {

  }
}
