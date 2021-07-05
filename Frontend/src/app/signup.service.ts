import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  item={
    fname:'',
    lname:'',
    phonenumber:'',
    Email:'',
    password:'',
    confirmpassword:''
  }
  constructor(private http:HttpClient) { }

  newUser(item:any){
    return this.http.post("http://localhost:7777/adduser",{"user":item})
    .subscribe(data=>{console.log(data)})
  }
}
