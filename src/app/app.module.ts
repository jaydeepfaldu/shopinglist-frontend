import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { CreatelistComponent } from './createlist/createlist.component';
import { AppRoutingModule } from './/app-routing.module';
import { InbucketComponent } from './inbucket/inbucket.component';

import { ItemrestService } from './itemrest.service';

@NgModule({
  declarations: [
    AppComponent,
    CreatelistComponent,
    InbucketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
  ],
  providers: [ItemrestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
