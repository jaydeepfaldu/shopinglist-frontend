import { Component, OnInit } from '@angular/core';

import {Items} from '../items';
import {ItemrestService} from '../itemrest.service';

@Component({
  selector: 'app-pricecompare',
  templateUrl: './pricecompare.component.html',
  styleUrls: ['./pricecompare.component.css']
})
export class PricecompareComponent implements OnInit {

  itemlistprice : Items[];
  
  constructor(private itemservice: ItemrestService) { }

  ngOnInit() {
     this.getItems();
  }

  getItems(): void{
    this.itemservice.getItemsInBucket().subscribe(itemlist => {
      this.itemlistprice = itemlist;
    });
  }
  
  updateSprice(id, sprice){
    this.itemservice.updateItemPrice(id,sprice).subscribe(itemlist => {
      this.itemlistprice = itemlist;
    });
  }
  
}
