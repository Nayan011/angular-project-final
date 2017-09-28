import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AppComponent }   from './app.component';
import { providerLoginComponent }      from '../components/providerLogin';
import {singleServiceComponent} from '../components/singleService';
import {addProviderComponent} from '../components/addServiceProvider';
import {transactionsComponent} from '../components/transactions';
import {createCusComponent} from '../components/createCustomet';
import {customerLoginComponent} from '../components/customerLogin';
import { homeComponent } from '../components/home';

const routes: Routes = [
  //paths used by Nuruzzaman
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'providerLogin',  component: providerLoginComponent },
  { path: 'singleService/:id',  component: singleServiceComponent },
  { path: 'createServiceProvider',  component: addProviderComponent},
  { path: 'transactions',  component: transactionsComponent},
  {path:'home',component:homeComponent},

  //paths used by Kumar
  { path: 'createCus',  component: createCusComponent},
  {path:'customerLogin',component:customerLoginComponent}


  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/