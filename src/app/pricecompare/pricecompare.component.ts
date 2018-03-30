import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {Items} from '../items';
import {ItemList} from '../itemlist';
import {ItemrestService} from '../itemrest.service';


@Component({
  selector: 'app-pricecompare',
  templateUrl: './pricecompare.component.html',
  styleUrls: ['./pricecompare.component.css']
})
export class PricecompareComponent implements OnInit {

  itemlistprice : Items[];
  itemlist : ItemList[];
  
  constructor(private itemservice: ItemrestService, private router : Router) { }

  ngOnInit() {

    if(window.localStorage.getItem("session")!=="true")
    {
        this.router.navigate(["/auth"]);
    }

    this.getListTitle();
  }

  getListTitle()
  {
    this.itemservice.getItemList(Number(window.localStorage.getItem("user_id"))).subscribe(list =>{ 
      this.itemlist = list;
    });
  }
  

  getItems(searchitem): void{
    //console.log(searchitem);
    if(searchitem>0)
    {
      this.itemservice.getItemsInBucket(searchitem).subscribe(item =>{ 
        this.itemlistprice = item;
      });
    }
  }

  updateSprice(lid, spr, cid){
    console.log(lid);
    console.log(spr);
    console.log(cid);
    this.itemservice.updateSprise(lid, spr, cid).subscribe(item =>{ 
      this.itemlistprice = item;
    });
    
  }
  
}
