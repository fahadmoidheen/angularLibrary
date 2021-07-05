import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
import { UserModel } from './signup.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title:String='SignUp'
  
  constructor(private signupService:SignupService,private router:Router) { }

  user={
    fname:'',
    lname:'',
    phonenumber:'',
    Email:'',
    password:'',
    confirmpassword:''
  }

  pwdmsg:any;
  color:any;
  errmsg:any
  
  
  ngOnInit(): void {
    
  }

  addUser(){
    if(this.user.confirmpassword==this.user.password){
      this.signupService.newUser(this.user)
      alert("Profile is created");
      this.router.navigate(['login'])
    }
    else{
      this.errmsg="Passwword doesn't match"
      
    }
  }

  validatePassword(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])(?=.*\\W))|((?=.*[a-z])(?=.*[0-9])(?=.*\\W))|((?=.*[A-Z])(?=.*[a-z])(?=.*\\W))).*$", "g");
    var enoughRegex = new RegExp("(?=.{3,}).*", "g");

    if(false == enoughRegex.test(this.user.password)){
      this.pwdmsg="too short!!",
      this.color="text-danger"
    }
    else if (strongRegex.test(this.user.password)){
      this.pwdmsg="Strong",
      this.color="text-success"
    }
    else if (mediumRegex.test(this.user.password)){
      this.pwdmsg="Medium",
      this.color="text-warning"
    }
    
    else {
      this.pwdmsg="oops!.. its weak",
      this.color="text-success"
    }
  }

}
