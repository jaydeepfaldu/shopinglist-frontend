
import { Component, OnInit, NgModule} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormControlName } from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Items} from '../items';
import {ItemList} from '../itemlist';
import { ItemrestService } from '../itemrest.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-createlist',
  templateUrl: './createlist.component.html',
  styleUrls: ['./createlist.component.css']
})

@NgModule({
  imports:[NgbModule]
})

export class CreatelistComponent implements OnInit {

  
  
  titleform : FormGroup;
  titlename : FormControl;

  listforme : FormGroup;
  listid : FormControl;
  name : FormControl;
  store : FormControl;
  qty : FormControl;
  eprice : FormControl;
  
  itemlist : ItemList[];
  
  items : Items[];
  
  storenamelist = [{name:'Zabka'},{name:'Fresh'},{name:'Korona'}];
  
 
  constructor(private itemservice: ItemrestService, private router : Router) {}

  

  ngOnInit() {

    

    if(window.localStorage.getItem("session")!=="true")
    {
        this.router.navigate(["/auth"]);
    }
    

    this.getItemList();

    this.createItemFormControls();
    this.createItemForm();
    
    this.createTitleFormControls();
    this.createTitleForm();

    
  }
  
  createItemFormControls()
  {
      this.listid =  new FormControl(null,[Validators.required]);
      this.name =  new FormControl(null,[Validators.required, Validators.minLength(1)]);
      this.store =  new FormControl(null,[Validators.required, Validators.minLength(1)]);
      this.qty =  new FormControl(null,[Validators.required, Validators.min(0)]);
      this.eprice =  new FormControl(null,[Validators.required, Validators.min(0)]);       
  }
  
  createItemForm()
  {
     this.listforme = new FormGroup({
       listid : this.listid,
       name : this.name,
       store : this.store,
       qty : this.qty,
       eprice : this.eprice         
     });
  }
  


  createTitleFormControls()
  {
      this.titlename =  new FormControl(null,[Validators.required, Validators.minLength(1)]);
  }
  
  createTitleForm()
  {
     this.titleform = new FormGroup({
      titlename : this.titlename               
     });
  }


  
  getItemList(): void{
    this.itemservice.getItemList(window.localStorage.getItem("user_id")).subscribe(itemlist => {
      this.itemlist = itemlist;

    });
  }
  
  getItems(searchitem): void{
    //console.log(searchitem);
    if(searchitem>0)
    {
      this.itemservice.getItems(searchitem).subscribe(item =>{ 
        this.items = item;
      });
    }
  }


  onAddItem() 
  {
    this.itemservice.onAddItem(this.listid.value, this.name.value, this.store.value, this.qty.value, this.eprice.value ).subscribe(item =>{
       this.items = item;
    });
   
  }
  
  reset()
  {
    this.listforme.reset();
  }


  addTitleItem()
  {
    this.itemservice.addTitleList(this.titlename.value, Number(window.localStorage.getItem("user_id"))).subscribe(itemlist => {
          this.itemlist = itemlist;
          this.titleform.reset();
    });
  }

}
