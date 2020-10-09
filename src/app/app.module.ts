import { GetProductsService } from './get-products.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GetProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
