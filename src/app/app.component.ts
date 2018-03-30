import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shoping List';
  auth = "Login";
  
  
   constructor(private http:HttpClient, private router:Router) {}

  


  ngOnInit():void {

    this.onUpdate();

    this.http.get('/api/user/items').subscribe(data=>{
      console.log(data);
    });

  }

  onUpdate()
  {
    if(this.isAuthentication())
    {
      this.auth = "Logout";
      console.log("logout");
    }
    else{
      window.localStorage.getItem("session")==="false";
      this.auth = "Login";
      console.log("login");
    }
  }
  

  createList()
  {
   
      this.router.navigate(["/createlist"]);
   
  }

  inBucket()
  {
    
      this.router.navigate(["/inbucket"]);
    
  }

  priceCompare()
  {
   
      this.router.navigate(["/pricecompare"]);
   
  }

  print()
  {
   
      this.router.navigate(["/print"]);
   

  }
  
  authentication()
  {

    if(this.isAuthentication())
    {
      window.localStorage.setItem("session","false");
      window.localStorage.setItem("user_id","");
      window.localStorage.setItem("username","");
      this.onUpdate();      
    }

    this.router.navigate(["/auth"]);
  }

  isAuthentication() : boolean
  {
    if(window.localStorage.getItem("session")==="true")
    {
      return true;
    }
    
    return false;
  }
  
}
