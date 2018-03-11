import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatelistComponent }   from './createlist/createlist.component';
import { InbucketComponent }   from './inbucket/inbucket.component';

const routes: Routes = [
  { path: '', redirectTo: '/createlist', pathMatch: 'full' },
  { path: 'createlist', component: CreatelistComponent },  
  { path: 'inbucket', component: InbucketComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}