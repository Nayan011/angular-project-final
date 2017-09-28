import { Component, Input,Output,OnInit } from '@angular/core';
//import {StudentService} from './student.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import{ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {ProviderService} from '../services/ServiceProvider';

@Component({
  selector: 'customer-transactions',
  template: `
  <div>
  <h3>Available Transactions list</h3>
  <ul>
  <li *ngFor="let tran of customers.customers.transactions"> <input type="hidden" #fromLoc  value={{tran.fromLoc}}>
  <input type="hidden" #toLoc  value={{tran.toLoc}}>
  <input type="hidden" #pickDate  value={{tran.pickDate}}>
  <input type="hidden" #dropDate  value={{tran.dropDate}}>
  <p>  From {{tran.fromLoc}} to {{tran.toLoc}} and budget:$ {{tran.budget}}
  <button  (click)="acceptTransaction(fromLoc,toLoc,pickDate,dropDate)" class="btn btn-primary">Accept</button>
  </p>
  
  </li>
  </ul>


</div>
<div style="width:50%">
<form [formGroup]="myForm" (ngSubmit)="addServiceto()">
From:<input type="text" class="form-control" formControlName="fromLoc" value={{fromLoc}}><br>
Destination:<input type="text" class="form-control" formControlName="toLoc" value={{toLoc}}><br>
Pick up Date:<input type="text" class="form-control" formControlName="pickDate" value={{dropDate}} ><br>
Drop Date:<input type="text" class="form-control" formControlName="dropDate" value={{dropDate}} ><br>
Received Amount:<input type="Number" class="form-control" formControlName="amountReceived" value=0 ><br>
Current Status:<input type="text" class="form-control" formControlName="status" value="not delivered" ><br><br>
<button type="submit" class="btn btn-primary">Add service</button>

</form>
</div>

{{success.success}}


  `
})
export class transactionsComponent {
    customers;
    transaction;
    myForm:FormGroup;
    constructor(private providerService:ProviderService,private formBuilder: FormBuilder){

        this.providerService.getTransactions().map(x=>x.json()).subscribe(res=>{

            this.customers=res;
            console.log(this.customers);
        });
        
        this.myForm=formBuilder.group({
            fromLoc:"",
            toLoc:"",
            pickDate:"",
            dropDate:"",
            amountReceived:0,
            status:"Not delivered"
          
          });
    }

toLoc;
fromLoc;
pickDate;
dropDate;

    acceptTransaction(f,t,p,d)
    {
      this.fromLoc=f.value;
      this.toLoc=t.value;
      this.pickDate=p.value;
      this.dropDate=d.value;

    }
success;
    addServiceto()
 {

    this.providerService.addService(this.myForm.value).subscribe(x=>this.success=(x.json()));
 }
    
   
    

    
  }






 
 
 
