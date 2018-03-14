import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatelistComponent }   from './createlist/createlist.component';
import { InbucketComponent }   from './inbucket/inbucket.component';
import { PricecompareComponent }   from './pricecompare/pricecompare.component';
import { SendmailComponent }   from './sendmail/sendmail.component';

const routes: Routes = [
  { path: '', redirectTo: '/createlist', pathMatch: 'full' },
  { path: 'createlist', component: CreatelistComponent },  
  { path: 'inbucket', component: InbucketComponent },
  { path: 'pricecompare', component: PricecompareComponent},
  { path: 'print', component: SendmailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}