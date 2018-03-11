import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatelistComponent }   from './createlist/createlist.component';
import { InbucketComponent }   from './inbucket/inbucket.component';
import { PricecompareComponent }   from './pricecompare/pricecompare.component';

const routes: Routes = [
  { path: '', redirectTo: '/createlist', pathMatch: 'full' },
  { path: 'createlist', component: CreatelistComponent },  
  { path: 'inbucket', component: InbucketComponent },
  { path: 'pricecompare', component: PricecompareComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}