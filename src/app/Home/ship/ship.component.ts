import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ShipService } from 'src/app/Shared/ship.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


// <!-- /*
// * Author: Megyeri Márk Máté
// * Copyright: 2023, Megyeri Márk Máté
// * Group: Szoft V
// * Date: 2023-04-19
// * Github: https://github.com/megyerimark/
// * Licenc: GNU GPL
// */ -->
@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent {

  form!:FormGroup;
  success!:any;

  ships!:any;

constructor(private ship:ShipService, private http:HttpClient,
  private formBuild:FormBuilder, private toastr:ToastrService){}
  ngOnInit(): void{

    this.index();
    this.form = this.formBuild.group({
      id:['',Validators.required],
      name:['', Validators.required],
      length:['', Validators.required],
      price:['', Validators.required],
      person:['', Validators.required],
      trailer:['', Validators.required],
  });

  }

  addShip(){
    let id = this.form.value.id;
    let name = this.form.value.name;
    let length = this.form.value.length;
    let price = this.form.value.price;
    let person= this.form.value.person;
    let trailer = this.form.value.trailer;

    this.ship.addShip(id, name,length,price,person,trailer).subscribe({
      next: data =>{
        this.toastr.success('Sikeres hozzáastál egy új hajót :)');
        this.success= true;

    

      },
      error:err=>{
        this.toastr.error("Hiba! A hajó felvétel sikertelen!")
        this.success= false;
        this.index();
      }
    })
  }


  index(){
    this.ship.index().subscribe({
      next:res=>{
        this.ships = res;
    
      }
    })
  }

}
