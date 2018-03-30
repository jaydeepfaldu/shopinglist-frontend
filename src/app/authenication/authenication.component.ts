import { Component, OnInit, NgModule} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormControlName } from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Items} from '../items';
import {User} from '../user';
import {AppComponent} from '../app.component';
import { ItemrestService } from '../itemrest.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-authenication',
  templateUrl: './authenication.component.html',
  styleUrls: ['./authenication.component.css']
})
export class AuthenicationComponent implements OnInit {


  user : User;

  validuser ="";

  loginForm : FormGroup;
  username : FormControl;
  password : FormControl;

  constructor(private itemservice : ItemrestService, private appcomp : AppComponent, private router: Router) { }

  ngOnInit() {
    this.loginFormControls();
    this.loginForms();

    
  }


  loginFormControls()
  {
      this.username =  new FormControl(null,[Validators.required]);
      this.password =  new FormControl(null,[Validators.required]);
         
      
  }
  
  loginForms()
  {
     this.loginForm = new FormGroup({
      username : this.username,
      password : this.password            
     });
  }

  onClickLogin()
  {
    
   

    this.itemservice.login(this.username.value, this.password.value).subscribe(user=>{
      this.user = user;
      if(user===null)
      {
         this.validuser = "Invalid username or password";  
      }
      else{
        window.localStorage.setItem("session","true");
        window.localStorage.setItem("user_id",user.user_id+'');
        window.localStorage.setItem("username",user.username);
        this.appcomp.onUpdate();
        this.router.navigate(['/createlist']);
               
      }

      this.loginForm.reset(); 
      
    });
    
    
    
  }

}
