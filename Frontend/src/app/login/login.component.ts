import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    email:'',
    password:''
  }
  constructor(private _auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  
  loginUser(){
    this._auth.loginUser(this.user)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this.router.navigate([""])
      },
      err=>{
        console.log(err)
        this.router.navigate(["login"])
        alert(" Sorry!! You are not admin  logging in is only for admin")
      }
    )
  }
}
