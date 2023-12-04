import { Component, OnInit } from '@angular/core';
import { Contact } from '../Model/contact';

@Component({
  selector: 'app-contactliste',
  templateUrl: './contactliste.component.html',
  styleUrls: ['./contactliste.component.css']
})
export class ContactlisteComponent implements OnInit{
  listContacts:Array<Contact> = new Array<Contact>();
  constructor() { 
     
    this.setMarkContact();
    this.createContact(); 
    }
    isMarked = true;
    isFriendContact = true;
    isFamilyContact = false;
    isWorkContact = true;
    markContact: Record<string, boolean> = {};
    setMarkContact(){
    this.markContact={
    friendContact : this.isFriendContact,
    familyContact: this.isFamilyContact,
    workContact: this.isWorkContact
    }
    }
  ngOnInit(): void {
  }
  

 
  editContact()
  {const  userconfirmed=confirm("Voulez-vous ajouter le contact");
  if (userconfirmed){
    alert ("contact est ajoutée")
  }else 
  alert ("action annule")
  }
  markContactStyle: Record<string, string> = {}; 
setMarkContactStyle() { 
this.markContactStyle = { 
'font-style': this.isFriendContact ? 'italic' : 'normal', 
'font-weight': !this.isFamilyContact ? 'bold' : 'normal', 
'font-size': this.isWorkContact ? '24px' : '12px'  
} 
} 
createContact() { 
  this.listContacts.push({id:0,type:"Work",firstName:"Arfaoui ",lastName:"Yakoub",email:"wared07@gmail.com",description:"Travail",phone:"98 559 121"});
    this.listContacts.push({id:1,type:"Work",firstName:"Degachi ",lastName:"Brahim",email:"degachib@gmail.com",description:"Travail",phone:"98 225 145"});
    this.listContacts.push({id:2,type:"Family",firstName:"Alia ",lastName:"Othmani",email:"aliaothmani123@gmail.com",description:"Famille",phone:"25 879 314"});
    this.listContacts.push({id:3,type:"Family",firstName:"Azzouzi ",lastName:"Beia",email:"mohamedA3@gmail.com",description:"Famille",phone:"54 763 114"});
    this.listContacts.push({id:4,type:"Friend",firstName:"Grine ",lastName:"Minyar",email:"minyargrine21@gmail.com",description:"Amis",phone:"25 489 632"});
    this.listContacts.push({id:5,type:"Friend",firstName:"Bouneb ",lastName:"Khaled",email:"bounedkh@gmail.com",description:"Amis",phone:"22 445 882"});
 
} 
deleteContact(id:number):void{
  

  let index:number=-1;
  for(let c of this.listContacts){
    index = index+1;
    if(c.id==id){
    break;
    }
    
    }
    if(index!=-1){
    this.listContacts.splice(index,1);
    }
    }
   

}


