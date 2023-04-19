import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ShipService } from 'src/app/Shared/ship.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent {

  form!:FormGroup;

constructor(private ship:ShipService, private http:HttpClient,
  private formBuild:FormBuilder){}
  ngOnInit():void{
    this.form = this.formBuild.group([

      name:['', Validators.required],
      length:['', Validators.required],
      price:['', Validators.required],
      person:['', Validators.required],
      trailer:['', Validators.required],
    ]);

  }

  addShip(){

    let name = this.form.value.name;
    let length = this.form.value.length;
    let price = this.form.value.price;
    let person= this.form.value.person;
    let trailer = this.form.value.trailer;
  }

}
