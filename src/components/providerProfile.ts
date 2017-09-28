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
import {ProviderService} from '../services/ServiceProvider';

@Component({
  selector: 'provider-profile',
  template: `
  <div *ngIf="provider">
  <p>Name:{{ provider.name }}</p>
 <p>Email: {{provider.email}}</p>
<p>Mobile No: {{provider.mobileNo }}</p>
<p>Account No: {{provider.accountNo }}</p>
<p>Bank Name: {{provider.bankName }}</p>
  <div>
  <h3>Service provider's services</h3>
  <ul>
          <li *ngFor="let service of provider.services"> <p>{{service.fromLoc}} to {{service.toLoc}}, Status:{{service.status}}
           <a [routerLink]="['/singleService',service._id]">Edit</a></p></li>              
      
 </ul>
</div>
<div><customer-transactions></customer-transactions></div>

</div>




  `
})
export class providerProfileComponent {
 
  constructor() {}

@Input() provider;



 
 
 
}