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
import {ProviderService} from '../services/ServiceProvider';

@Component({
  selector: 'provider-service-insert',
  template: `
  <div style="width:50%">
  <form [formGroup]="myForm" (ngSubmit)="onsubmit()">

  Name:<input type="text" class="form-control"  formControlName="name"><br>
  Email:<input type="text" class="form-control"  formControlName="email"><br>
  Password:<input type="password" class="form-control"  formControlName="password"><br>
  Licence No:<input type="text" class="form-control"  formControlName="licenceNo"><br>
  Accounr No:<input type="Number" class="form-control"  formControlName="accountNo"><br>
  Bank Name:<input type="text" class="form-control"  formControlName="bankName"><br>
  Mobile No:<input type="Number" class="form-control"  formControlName="mobileNo"><br><br>

  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
</div>
  `
})
export class addProviderComponent {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private providerService:ProviderService) {
    

    this.myForm = formBuilder.group({
        "name":["",Validators.required],
        'email': ['', [
            Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]],
    "password":["",Validators.required],
    "licenceNo":"",
    "accountNo":0,
    "bankName":"",
    "mobileNo":0
      
    });

    
    
  }

  data;
  onsubmit() {
    this.providerService.createServiceProvider(this.myForm.value).subscribe(res=>{
   this.data=res.json();
   console.log(this.data);

    });
    
  }
 
 
 
}