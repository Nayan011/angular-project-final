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
  selector: 'customer-insert',
  template: `
  <div style="width:50%">
  <form [formGroup]="myForm" (ngSubmit)="createCustomer()">

  Name:<input type="text" class="form-control" formControlName="name"><br>
  Email:<input type="text" class="form-control" formControlName="email"><br>
  Password:<input type="password" class="form-control" formControlName="password"><br>
  Mobile No:<input type="Number" class="form-control" formControlName="mobileno"><br><br>

  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
</div>
  `
})
export class createCusComponent {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private customerService:CustomerService) {
    

    this.myForm = formBuilder.group({
        "name":["",Validators.required],
        'email': ['', [
            Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]],
    "password":["",Validators.required],
   
    "mobileno":0
      
    });

    
    
  }

  data;
  createCustomer() {
    this.customerService.createCustomer(this.myForm.value).subscribe(res=>{
   this.data=res.json();
   console.log(this.data);

    });
    
  }
 
 
 
}