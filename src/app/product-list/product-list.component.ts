import { GetProductsService } from './../get-products.service';
import { Product } from './../../models/products';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private getProductsService: GetProductsService) { }

  ngOnInit(): void {
    this.products = this.getProductsService.getData();
    this.products.subscribe((products) => {
      products.forEach(product => {
        console.log(product);
      });
    });
  }

}
