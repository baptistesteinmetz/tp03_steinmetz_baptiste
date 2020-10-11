// import { AppModule } from './app.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../models/products';
import { Observable, Subject } from 'rxjs';
import { environment } from '../environments/environment';
import { catchError, tap, map, filter} from 'rxjs/operators';
@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class ProductService {
  public products: Observable<Product[]>;

  private productSubject = new Subject<Product[]>();

  constructor(private http: HttpClient) {
    // this.getData().subscribe((res:any) => {
    //   this.products = res;
    //   this.products.forEach(products => console.log(products));
    // }, err => {
    //   console.log(err);
    // };
   }

  public getData(): Observable<Product[]> {
    this.products = this.http.get<Product[]>(environment.baseUrl);
    return this.products;
  }

  filterProducts(term: string): Observable<Product[]> {
    console.log(term);
    this.products = this.http.get<Product[]>(environment.baseUrl).pipe(
      map(res => res.filter((res) => res.name === term)
    ))
    this.products.forEach(product => console.log(product));
    return this.products;
  }

  // searchProducts(): Observable<Product[]> {

  // }
}
