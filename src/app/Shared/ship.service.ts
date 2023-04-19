import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor( private router:Router,  private http:HttpClient) { }


  host =  'http://localhost:8000/ships';



  index(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let httpOption = {
      headers: headers
    };
    return this.http.get<any>(this.host , httpOption);


  }
addShip(id:any,name:string, length:string,price:any,person:any,trailer:string)
 {

  let shipData={
    id:id,
    name:name,
    length:length,
    price:price,
    person:person,
    trailer:trailer
  };
  let headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  let httpOption = {
    headers:headers
  }

  return this.http.post<any>(this.host,shipData,httpOption);

 }

  

}
