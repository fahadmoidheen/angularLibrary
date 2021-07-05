import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUser(user:any){
    return this.http.post<any>("http://localhost:7777/login",user)
    
    
  }
  
  constructor(private http:HttpClient) { }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
}
