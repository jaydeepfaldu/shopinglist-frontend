import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import {Items} from './items';



@Injectable()
export class ItemrestService {

  private getItemsURL = 'http://localhost:8080/user/items';
  
  
  
  
   httpOptions = {
  headers: new HttpHeaders({
    
    'Content-Type':  'application/json',  
    'X-PINGOTHER':'pingpong',
    'Access-Control-Allow-Headers' : 'Origin, Accept, Authorization, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT, HEAD, OPTIONS',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Expose-Headers':'xsrf-token',
    'Access-Control-Max-Age':'1800',
    'Cache-Control':'max-age=0'
    
  })
};
  
  constructor(private http: HttpClient) { }


  getItems (): Observable<Items[]> {
    return this.http.get<Items[]>(this.getItemsURL, this.httpOptions);
      
  }
  
 addItem (name, store, qty, eprice): Observable<Items[]> {
   const obj = {
      name: name,
      store: store,
      qty:qty,
      eprice:eprice
    };
   return this.http.post<Items[]>('http://localhost:8080/user/item', obj, this.httpOptions);   
}

  
  updateItemBucket (item : Items): Observable<Items[]> {
  
   const obj = {
      inbucket : item.inbucket == 1 ? 0 : 1 
    };
   return this.http.put<Items[]>('http://localhost:8080/user/itembucket/'+item.id, obj, this.httpOptions);   
}
  
  
}
