import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule, RequestOptions} from "@angular/http";
//import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AgmCoreModule} from '@agm/core';
import {ActivatedRoute} from '@angular/router';
import {addProviderComponent} from '../components/addServiceProvider';
import {FormsModule,ReactiveFormsModule,FormGroup} from '@angular/forms';
import {providerLoginComponent} from '../components/providerLogin';
import {AppRoutingModule} from './routes';
import {ProviderService}from '../services/ServiceProvider';

import { AppComponent } from './app.component';
import {providerProfileComponent} from '../components/providerProfile';
import {singleServiceComponent} from '../components/singleService';
import {transactionsComponent} from '../components/transactions';
//import {addProviderComponent} from '../components/addServiceProvider';
import {CustomerService} from '../services/CustomerService';
import {createCusComponent} from '../components/createCustomet';
import {customerLoginComponent} from '../components/customerLogin';
import { homeComponent } from '../components/home';

@NgModule({
  declarations: [
    AppComponent,
    addProviderComponent,

    providerLoginComponent,
    providerProfileComponent,
    singleServiceComponent,
    transactionsComponent,
    createCusComponent,
    customerLoginComponent,
    homeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqsKlBRsxG-Spl8QC625fv4AxY29ZkxK0',
      libraries: ["places"]
    }),
    AppRoutingModule
  ],
  providers: [ProviderService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
