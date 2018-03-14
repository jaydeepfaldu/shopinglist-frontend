import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { CreatelistComponent } from './createlist/createlist.component';
import { AppRoutingModule } from './/app-routing.module';
import { InbucketComponent } from './inbucket/inbucket.component';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemrestService } from './itemrest.service';
import { PricecompareComponent } from './pricecompare/pricecompare.component';
import { SendmailComponent } from './sendmail/sendmail.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatelistComponent,
    InbucketComponent,
    PricecompareComponent,
    SendmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     ReactiveFormsModule
     
     
  ],
  providers: [ItemrestService],
  bootstrap: [AppComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);