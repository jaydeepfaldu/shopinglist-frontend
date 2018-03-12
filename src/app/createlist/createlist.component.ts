
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormControlName } from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

 
import {Items} from '../items';
import { ItemrestService } from '../itemrest.service';


@Component({
  selector: 'app-createlist',
  templateUrl: './createlist.component.html',
  styleUrls: ['./createlist.component.css']
})
export class CreatelistComponent implements OnInit {

  
  listforme : FormGroup;
  name : FormControl;
  store : FormControl;
  qty : FormControl;
  eprice : FormControl;
  
  
  itemlist : Items[];
  
  storenamelist = [{name:'Zabka'},{name:'Fresh'},{name:'Korona'}];
  
 
  constructor(private itemservice: ItemrestService) {}

  

  ngOnInit() {

    this.createItemFormControls();
    this.createItemForm();
    
    this.getItems();
    
  }
  
  createItemFormControls()
  {
      this.name =  new FormControl(null,[Validators.required, Validators.minLength(1)]);
      this.store =  new FormControl(null,[Validators.required, Validators.minLength(1)]);
      this.qty =  new FormControl(null,[Validators.required, Validators.min(0)]);
      this.eprice =  new FormControl(null,[Validators.required, Validators.min(0)]);       
  }
  
  createItemForm()
  {
     this.listforme = new FormGroup({
     name : this.name,
       store : this.store,
       qty : this.qty,
       eprice : this.eprice         
     });
  }
  
  
  
  getItems(): void{
    this.itemservice.getItems().subscribe(itemlist => {
      this.itemlist = itemlist;
    });
  }

  onClickAdd() 
  {
    if(this.listforme.valid)
    this.itemservice.addItem( this.name,this.store, this.qty, this.eprice).subscribe(itemlist => {
      this.itemlist = itemlist;
    });
    
    
  }
  
  reset()
  {
    this.listforme.reset();
  }

}
