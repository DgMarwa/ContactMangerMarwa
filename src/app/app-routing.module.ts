import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';//
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
//import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactlisteComponent } from './contactliste/contactliste.component';
import { AddContactComponent } from './add-contact/add-contact.component';


const routes: Routes = [
  { path: 'contactliste', component: ContactlisteComponent},
  { path: 'add-contact', component: AddContactComponent}
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
