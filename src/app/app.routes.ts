import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {BurgerComponent} from "./components/burger/burger.component";
import {PizzaComponent} from "./components/pizza/pizza.component";
import {BurgerDetailComponent} from "./components/burger-detail/burger-detail.component";
import {PizzaDetailComponent} from "./components/pizza-detail/pizza-detail.component";

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'burger', component:BurgerComponent},
  {path:'pizza', component:PizzaComponent},
  {path: 'burger/:id', component:BurgerDetailComponent},
  {path: 'pizza/:id', component:PizzaDetailComponent}
];
