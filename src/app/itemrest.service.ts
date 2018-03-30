import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import {Items} from './items';
import {ItemList} from './itemlist';
import {User} from './user';
import {MailResponse} from './mailresponse';



@Injectable()
export class ItemrestService {

  
  
  
  
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
  
  
  
   httpOptions_email = {
  headers: new HttpHeaders({
    
    'Content-Type':  'application/json',  
    'responseType':'text',
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

  
  onAddItem(lid, nm, stnm, qy, espr):Observable<Items[]> {
    const obj ={
      list_id: lid,
      item_name: nm,
      store_name: stnm,
      qty: qy,
      eprise: espr
    };
    return this.http.post<Items[]>("/api/item/item", obj, this.httpOptions);      
  }


  getItemList (user_id): Observable<ItemList[]> {
    return this.http.get<ItemList[]>("/api/itemlist/itemlists/"+user_id, this.httpOptions);
      
  }
  
  addTitleList(inam,uid): Observable<ItemList[]>
  {
    const obj ={
      list_title: inam,
      user_id: uid
    };

    return this.http.post<ItemList[]>('/api/itemlist/itemlist',  obj, this.httpOptions); 
  }


  getItems (list_id): Observable<Items[]> {
    return this.http.get<Items[]>("/api/item/items/"+list_id, this.httpOptions);      
  }

  getItemsInBucket (list_id): Observable<Items[]> {
    return this.http.get<Items[]>("/api/item/items/inbucket/"+list_id, this.httpOptions);      
  }

  login(unm, pass): Observable<User> {
    const obj = {
      username: unm,
      password: pass
     };
    return this.http.post<User>('/api/user/login',  obj, this.httpOptions);   
 }

  
  updateItemBucket (item : Items): Observable<Items[]> {
  
  const obj = {
      list_id : item.list_id,      
      inbucket : item.inbucket == 1 ? 0 : 1 
    };
   return this.http.put<Items[]>('/api/item/item/inbucket/'+item.container_id, obj, this.httpOptions);   
}

updateSprise(lid, spr, cid) : Observable<Items[]> {
  
  const obj = {
      list_id : lid,      
      sprise : spr
    };
   return this.http.put<Items[]>('/api/item/item/sprise/'+cid, obj, this.httpOptions);   
}
  
  
  
  sendMail(name, subject, message):Observable<MailResponse>{
     const obj = {
      receiver: name,
      subject: subject,
      message: message      
    };
    
   return this.http.post<MailResponse>('/api/user/sendmail', obj, this.httpOptions_email);   
}
  
  
  
}
