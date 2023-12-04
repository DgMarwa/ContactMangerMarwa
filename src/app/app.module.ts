import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { RootComponent } from './root/root.component';
import { MenuComponent } from './menu/menu.component';
import { ContactlisteComponent } from './contactliste/contactliste.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactItemComponent } from './contact-item./contact-item..component';


@NgModule({
  declarations: [
    
    RootComponent,
         MenuComponent,
         ContactlisteComponent,
         AddContactComponent,
         ContactItemComponent,
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
