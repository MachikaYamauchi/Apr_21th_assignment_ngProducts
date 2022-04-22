import { Component, OnInit } from '@angular/core';
import { Contact } from '../interfaces/contact';
import {NodeserviceService} from '../services/nodeservice.service'

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts:Contact[] = []

  constructor(private contactHttp:NodeserviceService) { }

  ngOnInit(): void {
    this.contactHttp.getContactFromNodeServer().subscribe((contacts)=>{
      this.contacts = contacts;
    })
  }

}
