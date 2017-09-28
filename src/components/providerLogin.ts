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
  selector: 'provider-insert',
  template: `
  <div class="form-group" style="width:50%">
  <form [formGroup]="myForm" (ngSubmit)="doLogin()">
  
  Email <input type="text" class="form-control" formControlName="email"><br>
  <p *ngIf="myForm.controls.email.errors">Required</p>
  Password <input type="password" class="form-control" formControlName="password"><br>
  
  <button type="submit" class="btn btn-primary" >Login</button>
  
</form>
</div>
<provider-profile [provider]="x.provider"><provider-profile>



  `
})
export class providerLoginComponent {
  myForm: FormGroup;
  providerServiceData;
  constructor(private formBuilder: FormBuilder,private providerService:ProviderService) {
    

    this.myForm = formBuilder.group({
        'email': ['', [
            Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]],
    "password":["",Validators.required] 
    });

    
    this.getProviderServices();
    
  }

   x;
  doLogin(){
    console.log('submit button is called');
    console.log(this.myForm.value);
this.providerService.providerLogin(this.myForm.value).subscribe(res=>this.x=res.json());
 //console.log(this.providerServiceData);  
}
data;

getProviderServices()
{
  this.providerService.getProviderServices().subscribe(res=>{
    this.data=res.json();
    console.log(this.data);
  });
  
}


 
 
 
}