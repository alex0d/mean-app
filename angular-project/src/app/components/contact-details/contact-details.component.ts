import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentContact: Contact = {
    username: '',
    email: '',
    phone: ''
  };
  
  message = '';

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getContact(this.route.snapshot.params["id"]);
    }
  }


  getContact(id: string): void {
    this.contactService.get(id)
      .subscribe({
        next: (data) => {
          this.currentContact = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateContact(): void {
    this.message = '';

    this.contactService.update(this.currentContact.id, this.currentContact)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteContact(): void {
    this.contactService.delete(this.currentContact.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/contacts']);
        },
        error: (e) => console.error(e)
      });
  }

}
