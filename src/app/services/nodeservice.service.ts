import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/products.interface';
import { Contact } from '../interfaces/contact';
import { AboutUs } from '../interfaces/about-us.interface';

@Injectable({
  providedIn: 'root'
})
export class NodeserviceService {

  private url = "http://localhost:4400/products";
  private contactURL = "http://localhost:4400/contact";
  private aboutUsURL = "http://localhost:4400/about-us";

  constructor(private nodehttp:HttpClient) { }

  getProductsFromMyNodeServer() {
    return this.nodehttp.get<Product[]>(this.url);
  }

  getContactFromNodeServer() {
    return this.nodehttp.get<Contact[]>(this.contactURL);
  }
  getAboutUsFromNodeServer() {
    return this.nodehttp.get<AboutUs[]>(this.aboutUsURL);
  }
}
