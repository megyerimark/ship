import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor( private router:Router,  private http:HttpClient) { }


  host =  'http://localhost:8000/ships';

addShip(name:string, length:string,price:any,person:any,trailer:string)
 {

  let shipData={
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
  let url = this.host;
  return this.http.post<any>(url,shipData,httpOption);

 }

  

}
