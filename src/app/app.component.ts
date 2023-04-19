import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ship';


  showNav = false;


  homer= false;

  home(){
  this.homer = !this.homer;
  }
 show(){

 }
}
// <!-- /*
// * Author: Megyeri Márk Máté
// * Copyright: 2023, Megyeri Márk Máté
// * Group: Szoft V
// * Date: 2023-04-19
// * Github: https://github.com/megyerimark/
// * Licenc: GNU GPL
// */ -->