import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormControlName } from '@angular/forms';

import { ItemrestService } from '../itemrest.service';
import { MailResponse } from '../mailresponse';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {

  mres : MailResponse;
  mailform : FormGroup;
  email : FormControl;
  sub : FormControl;
  
  status = "";
  
  constructor(private itemservice: ItemrestService) { }

  ngOnInit() {
    
     this.createItemFormControls();
    this.createItemForm();
    
    
  }

  
  
  createItemFormControls()
  {
      this.email =  new FormControl(null,[Validators.required, Validators.email, Validators.minLength(1)]);
      this.sub =  new FormControl(null,[Validators.required, Validators.minLength(1)]);
             
  }
  
  createItemForm()
  {
     this.mailform = new FormGroup({
      email : this.email,
       sub : this.sub                
     });
  }
  
  
   sendMail(): void{
     if(this.mailform.valid)
       {   
       //console.log(this.email.value +'  '+this.sub.value);
      this.itemservice.sendMail(this.email.value,this.sub.value,'').subscribe(msg => {
        this.mres = msg;
      this.status = "Email " + this.mres.msg;
      this.mailform.reset();
      });
     }
  }
  
  
}
