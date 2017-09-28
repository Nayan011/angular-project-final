import {Injectable} from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class CustomerService{
    data;
  constructor(public http:Http){}
  private headers = new Headers({'Content-Type': 'application/json'});
  
  
  createCustomer(data)
  {
      return this.http.post("http://localhost:8080/createCustomer",data);
     // return this.data;
  }
  
  customerLogin(data)
  {
      return this.http.post("http://localhost:8080/CustomerLogin",data);
  }
    
  }
