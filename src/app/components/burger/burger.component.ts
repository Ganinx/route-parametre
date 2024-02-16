import {Component, inject, TemplateRef} from '@angular/core';
import {Burger} from "../../models/burger";
import {NgForOf} from "@angular/common";
import {BurgerService} from "../../services/burger.service";
import {RouterModule} from "@angular/router";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";

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

  private modalService =inject(NgbModal)
  burgers:Burger[] = []

  constructor( private burgerService:BurgerService,private toastr: ToastrService) {
    this.burgers = burgerService.burgers;
  }

  openDelete(content: TemplateRef<any>,burger:Burger) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.burgers = this.burgerService.remove(burger)
        this.toastr.error('Suppression de '+ burger.nom)

      }
    );
  }



}
