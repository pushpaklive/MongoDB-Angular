import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlatMaintenanceService {

  constructor(private http: HttpClient) { }

  saveUserToDB(user){
  //  var userToBeSaved = {"user":user}
   return this.http.post("http://localhost:3000/saveuser", user)
  }

  saveItem(item){
    return this.http.post("http://localhost:3000/saveitem", item)
  }

  getItems(){
    return this.http.get("http://localhost:3000/allflatitems");
  }
}
