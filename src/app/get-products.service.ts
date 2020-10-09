// import { AppModule } from './app.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../models/products';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class GetProductsService {
  constructor(private http: HttpClient) { }
  public getData(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.baseUrl);
  }
}
