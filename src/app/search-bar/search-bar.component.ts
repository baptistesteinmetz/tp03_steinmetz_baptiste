import { filter, map } from 'rxjs/operators';
import { ProductService } from './../get-products.service';
import { Observable } from 'rxjs';
import { ProductListComponent } from './../product-list/product-list.component';
import { Product } from './../../models/products';
import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, Form } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchInput: FormControl;

  @Input() products: Observable<Product[]>;
  message: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.searchInput = new FormControl();
    this.products = this.searchInput.valueChanges;
    // this.products = this.productService.getData();
  }

  onFilterProducts() : Observable<Product[]>
  {
    console.log('filtering');
    this.products = this.productService.filterProducts(this.searchInput.value);
    return this.products;
    // this.productService.filter((data) => data.price > 5);
    // this.getProductsService.products.pipe(
    //   filter((data) => this.getProductsService.products.price < 15)
    // );
  }

  // onSearchProducts()
  // {
  //   console.log(this.searchInput);
  }


  // filterProducts(): void {
  //   this.getProductsService.filterProducts();
  // }
// }
