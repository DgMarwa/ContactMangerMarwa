import { Component } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  constructor(){
    this.setMarkContact();
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
}
