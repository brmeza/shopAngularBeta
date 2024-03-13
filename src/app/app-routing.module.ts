import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalgoComponent } from './catalgo/catalgo.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
{path: 'catalogo', component: CatalgoComponent},
{path: 'car', component:CartComponent},
{path: '**', redirectTo: 'catalogo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
