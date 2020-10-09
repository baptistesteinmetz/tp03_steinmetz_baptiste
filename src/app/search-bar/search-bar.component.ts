import { GetProductsService } from './../get-products.service';
import { Observable } from 'rxjs';
import { ProductListComponent } from './../product-list/product-list.component';
import { Product } from './../../models/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private getProducts: GetProductsService) { }

  ngOnInit(): void {
    this.products = this.getProducts.getData();
  }

}
