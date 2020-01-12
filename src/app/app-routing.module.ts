import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProdsComponent } from './Components/list-prods/list-prods.component';
import { CompareComponent } from './Components/compare/compare.component';
import { RechercheComponent } from './Components/recherche/recherche.component';


const routes: Routes = [
  { path: "images", component: ListProdsComponent},
  { path: "comparer", component:CompareComponent},
  { path: "recherche", component: RechercheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
