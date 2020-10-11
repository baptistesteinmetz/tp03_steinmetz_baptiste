import { EventEmitter } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../models/products';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { environment } from '../environments/environment';
import { catchError, tap, map, filter} from 'rxjs/operators';
@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class ProductService {
  // public products: Observable<Product>;

  // private productsChanged = new EventEmitter<Product>();

  constructor(private http: HttpClient) {
  //   this.getData().subscribe((res:any) => {
  //     this.products = res;
  //   }, err => {
  //     console.log(err);
  //   });
   }

  // public getData(): Observable<Product> {
  //   this.products = this.http.get<Product>(environment.baseUrl);
  //   return this.products;
  // }

  // filterProducts(term: string) {
  //   console.log(term);

  //   return this.products;
  //   // this.products.forEach(product => console.log(product));
  //   // this.productsChanged.emit();
  // }

  // searchProducts(): Observable<Product[]> {

  // }

  private products: Product[];
  private filteredProducts$: Subject<Product[]> = new ReplaySubject<Product[]>(1);

  getSearchResults(): Observable<Product[]> {
    console.log(this.filteredProducts$);
    return this.filteredProducts$.asObservable();
  }

  searchProduct(searchTerm: any): Observable<void> {
    console.log(searchTerm);
    console.log(typeof searchTerm);
    return this.getProducts().pipe(
      // using tap to update the stream without changing any data
      tap((products: Product[]) => {
        products = products.filter(product => {
          if(!isNaN(parseFloat(searchTerm)))
          {
            return product.price === parseFloat(searchTerm);
          }
          else {
            return product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm)
          }
        });
        // updating the stream
        this.filteredProducts$.next(products);
      }),
      map(() => void 0)
    );
  }

  private getProducts(): Observable<Product[]> {
    // return cached products
    if (this.products) {
      return of(this.products);
    }
    // fetch and cache products
    return this.http.get<Product[]>(environment.baseUrl).pipe(
      tap((products: Product[]) => this.products = products)
    );
  }

  priceFilter(status: number): Observable<Product[]> {
    console.log(status)
    return this.getProducts().pipe(
      tap((products : Product[]) => {
        products = products.sort((a,b) => {
          switch (status) {
            case 0:
              console.log("here" + status);
              return a.price < b.price ? -1 : 1;
              break;
            case 1:
              console.log("here" + status);
              return a.price > b.price ? -1 : 1;
              break;
            }
        });
        this.filteredProducts$.next(products);
        console.log(products);
      }
      ),
      map(() => void 0)
      );
  }

  nameFilter(status : number): Observable<Product[]> {
    console.log('here');
    return this.getProducts().pipe(
      tap((products : Product[]) => {
        products = products.sort((a,b) => {
          switch(status) {
            case 0:
              console.log('here !')
              return a.name < b.name  ? -1 : 1;
              break;
            case 1:
              console.log('here ?')
              return a.name > b.name ? -1 : 1;
              break;
          }
        });
        this.filteredProducts$.next(products);
        console.log(products);
      }),
      map(() => void 0)
    );
  }
}
