import { Component } from '@angular/core';
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
import {CustomerService} from '../services/CustomerService';

@Component({
  selector: 'customer-login',
  template: `
  
  <form [formGroup]="myForm" (ngSubmit)="doLogin()">
  
  Email <input type="text" class="form-control" formControlName="email"><br>
  <p *ngIf="myForm.controls.email.errors">Required</p>
  Password <input type="password" class="form-control" formControlName="password"><br>
  
  <button type="submit" class="btn btn-primary" >Login</button>
</form>

<div *ngIf="x">
Name:{{x.CustDetail.name}}
Email:{{x.CustDetail.email}}
Mobile No: {{x.CustDetail.mobileno}}
</div>


  `
})
export class customerLoginComponent {
  myForm: FormGroup;
  providerServiceData;
  constructor(private formBuilder: FormBuilder,private customerService:CustomerService) {
    

    this.myForm = formBuilder.group({
        'email': ['', [
            Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]],
    "password":["",Validators.required] 
    });

    
    
    
  }

   x;
  doLogin(){
    console.log('submit button is called');
    console.log(this.myForm.value);
this.customerService.customerLogin(this.myForm.value).subscribe(res=>this.x=res.json());
 //console.log(this.providerServiceData);  
}



  
}


 
 
 
