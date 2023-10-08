import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact = {
    username: '',
    email: '',
    phone: ''
  };

  submitted = false;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  saveContact(): void {
    const data = {
      username: this.contact.username,
      email: this.contact.email,
      phone: this.contact.phone
    };
    

    this.contactService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newContact(): void {
    this.submitted = false;
    this.contact = {
      username: '',
      email: '',
      phone: ''
    };
  }

}
