import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


import { AppComponent } from './app.component';
import { CreatelistComponent } from './createlist/createlist.component';
import { AppRoutingModule } from './/app-routing.module';
import { InbucketComponent } from './inbucket/inbucket.component';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemrestService } from './itemrest.service';
import { PricecompareComponent } from './pricecompare/pricecompare.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { AuthenicationComponent } from './authenication/authenication.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatelistComponent,
    InbucketComponent,
    PricecompareComponent,
    SendmailComponent,
    AuthenicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     ReactiveFormsModule,
     NgbModule.forRoot()
     
     
  ],
  providers: [ItemrestService],
  bootstrap: [AppComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);