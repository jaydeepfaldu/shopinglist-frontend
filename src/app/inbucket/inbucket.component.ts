import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {Items} from '../items';
import {ItemList} from '../itemlist';
import { ItemrestService } from '../itemrest.service';

@Component({
  selector: 'app-inbucket',
  templateUrl: './inbucket.component.html',
  styleUrls: ['./inbucket.component.css']
})
export class InbucketComponent implements OnInit {

  itemlistinbucket : Items[];
  itemlist : ItemList[];

  


  constructor(private itemservice: ItemrestService, private router : Router) { }

  ngOnInit() {


    if(window.localStorage.getItem("session")!=="true")
    {
        this.router.navigate(["/auth"]);
    }
    
     this.getListTitle();
    
  }

  getItems(searchitem): void{
    //console.log(searchitem);
    if(searchitem>0)
    {
      this.itemservice.getItems(searchitem).subscribe(item =>{ 
        this.itemlistinbucket = item;
      });
    }
  }


  getListTitle()
  {
    this.itemservice.getItemList(Number(window.localStorage.getItem("user_id"))).subscribe(list =>{ 
      this.itemlist = list;
    });
  }
  
  updateInBucket(item : Items){
    this.itemservice.updateItemBucket(item).subscribe(list =>{ 
      this.itemlistinbucket = list;
    });
  }
  
}
