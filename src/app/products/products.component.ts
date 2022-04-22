import { Component, OnInit } from '@angular/core';
import {NodeserviceService} from '../services/nodeservice.service';
import {Product} from '../interfaces/products.interface';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  products:Product[] = [];

  constructor(private productService:NodeserviceService) { }

  ngOnInit(): void {
    this.productService.getProductsFromMyNodeServer().subscribe((products)=> {
      console.log(products);
      this.products = products;
    })
  }

}
