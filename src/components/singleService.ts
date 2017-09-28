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
  selector: 'single-service',
  template: `
  <div style="width:50%">
  <form [formGroup]="myForm" (ngSubmit)="updateService()">
  From:<input type="text" class="form-control" formControlName="fromLoc" value={{service.service.fromLoc}}><br>
  Destination:<input type="text" class="form-control" formControlName="toLoc" value={{service.service.toLoc}}><br>
  Pick up Date:<input type="text" class="form-control" formControlName="pickDate" value={{service.service.pickDate}}><br>
  Drop Date:<input type="text" class="form-control" formControlName="dropDate" value={{service.service.dropDate}}><br>
  Received Amount:<input type="text" class="form-control" formControlName="amountReceived" value={{service.service.amountReceived}}><br>
  Current Status:<input type="text" class="form-control" formControlName="status" value={{service.service.status}}><br><br>
  <button type="submit" class="btn btn-primary">Update</button>


</form>
  

<div *ngIf="success">
 <p>{{success.success}}</p>


</div>




  `
})
export class singleServiceComponent {
    service;
    sid;
    myForm:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,private providerService:ProviderService,private fb:FormBuilder) {
    activatedRoute.params.subscribe((x)=>{this.sid=x['id'];
    this.providerService.getSingleService(this.sid).subscribe(res=>{
        this.service=res.json();
        console.log(this.service);
    });
   });

   this.myForm=fb.group({

    "fromLoc":"",
    "toLoc":"",
    "pickDate":"",
    "dropDate":"",
    "amountReceived":0,
    "status":""

   });
  }
success;
  updateService()
  {
    this.providerService.updateService(this.sid,this.myForm.value).subscribe(res=>{
      this.success=res.json();
      console.log(this.success);
    
    });
  }




 
 
 
}