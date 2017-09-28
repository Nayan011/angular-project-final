import {Injectable} from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class ProviderService{
    data;
  constructor(public http:Http){}
  private headers = new Headers({'Content-Type': 'application/json'});
  url="http://localhost:8080/providerLogin";
  providerLogin(data)
  {
      return this.http.post(this.url,data);
  }
  getProviderServices()
  {
      return this.http.get("http://localhost:8080/getServiceProviders");
     // return this.data;
  }
  
  getSingleService(id)
  {
    return this.http.get("http://localhost:8080/singleService/"+id);

  }
  createServiceProvider(data)
  {
  return this.http.post("http://localhost:8080/createServiceProvider",data);

  }
    
  getTransactions(){

   return  this.http.get("http://localhost:8080/customers");
    }

  addService(data)
  {
    return this.http.post("http://localhost:8080/addService",data);
  }
  updateService(id,data)
  {
    return this.http.post("http://localhost:8080/updateService/"+id,data);
  }
    
  }
