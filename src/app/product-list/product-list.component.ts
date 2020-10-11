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

  products: Observable<Product[]> = this.productService.getSearchResults();
  productSubscription: Subscription;

  loaded : boolean = false;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 3000);
  }
}
