import { Component } from '@angular/core';
import {RouterLink, RouterModule} from "@angular/router";
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink, RouterModule, NgbCollapse
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  isNavBarCollapse: boolean = true


}
