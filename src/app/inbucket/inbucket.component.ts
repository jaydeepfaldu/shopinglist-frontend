import { Component, OnInit } from '@angular/core';


import {Items} from '../items';
import { ItemrestService } from '../itemrest.service';

@Component({
  selector: 'app-inbucket',
  templateUrl: './inbucket.component.html',
  styleUrls: ['./inbucket.component.css']
})
export class InbucketComponent implements OnInit {

  itemlistinbucket : Items[];
  
  constructor(private itemservice: ItemrestService) { }

  ngOnInit() {
     this.getItems();
    
    /*this.itemlistinbucket = [{id:1,name:'bis',store:'s1',qty:1, inbucket:1, eprice:0, sprice:0},
    {id:1,name:'wat',store:'s2',qty:1, inbucket:0, eprice:0, sprice:0},
  {id:1,name:'mil',store:'s3',qty:1, inbucket:1, eprice:0, sprice:0}];
    */
  }

  getItems(): void{
    this.itemservice.getItems().subscribe(itemlist => {
      this.itemlistinbucket = itemlist;
    });
  }
  
  updateInBucket(item : Items){
    this.itemservice.updateItemBucket(item).subscribe(itemlist => {
      this.itemlistinbucket = itemlist;
    });
  }
  
}
