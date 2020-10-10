import { ProductService } from './../get-products.service';
import { Product } from './../../models/products';
import { Observable, Subscription } from 'rxjs';
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
  productSubscription: Subscription;

  loaded : boolean = false;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getData();
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
    this.productSubscription = this.products.subscribe(
      (products) => {
        this.products.forEach(product => {
          console.log(product);
        });
      }
    );

    // console.log(this.products);
    // console.log(this.productSubscription);
  }

  fliterProducts(): void {
    // this.getProductsService.getData().subscribe(message => {this.message = message;});
  }

}
