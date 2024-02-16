import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {BurgerComponent} from "./components/burger/burger.component";
import {PizzaComponent} from "./components/pizza/pizza.component";
import {BurgerDetailComponent} from "./components/burger-detail/burger-detail.component";
import {PizzaDetailComponent} from "./components/pizza-detail/pizza-detail.component";
import {AjoutPizzaComponent} from "./components/ajout-pizza/ajout-pizza.component";
import {AjoutBurgerComponent} from "./components/ajout-burger/ajout-burger.component";

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'burger', component:BurgerComponent},
  {path:'pizza', component:PizzaComponent},
  {path: 'burger/add', component:AjoutBurgerComponent},
  {path: 'burger/:id', component:BurgerDetailComponent},
  {path: 'pizza/add', component:AjoutPizzaComponent},
  {path: 'pizza/:id', component:PizzaDetailComponent}
];
