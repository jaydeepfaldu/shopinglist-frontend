
import { Component, OnInit} from '@angular/core';

import {Items} from '../items';
import { ItemrestService } from '../itemrest.service';


@Component({
  selector: 'app-createlist',
  templateUrl: './createlist.component.html',
  styleUrls: ['./createlist.component.css']
})
export class CreatelistComponent implements OnInit {

 
  
  itemlist : Items[];
  
  storenamelist = [{name:'Zabka'},{name:'Fresh'},{name:'Korona'}];
  
 
  constructor(private itemservice: ItemrestService) {}

  ngOnInit() {

    this.getItems();
    
  }
  
  getItems(): void{
    this.itemservice.getItems().subscribe(itemlist => {
      this.itemlist = itemlist;
    });
  }

  onClickAdd(item,store,qty, eprice) 
  {
    
    this.itemservice.addItem(item,store,qty, eprice).subscribe(itemlist => {
      this.itemlist = itemlist;
    });
    
    
  }

}
