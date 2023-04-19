import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Home/about/about.component';
import { HomeComponent } from './Home/home/home.component';
import { ShipComponent } from './Home/ship/ship.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'ship', component:ShipComponent},
  {path:'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// <!-- /*
// * Author: Megyeri Márk Máté
// * Copyright: 2023, Megyeri Márk Máté
// * Group: Szoft V
// * Date: 2023-04-19
// * Github: https://github.com/megyerimark/
// * Licenc: GNU GPL
// */ -->