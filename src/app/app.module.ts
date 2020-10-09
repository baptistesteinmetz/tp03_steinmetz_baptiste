import { HttpClientModule } from '@angular/common/http';
import { ErrorInputDirective } from './customdirectives.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { GetProductsService } from './get-products.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { RecapComponent, PhonePipe, CodePipe } from './recap/recap.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    RecapComponent,
    ErrorInputDirective,
    PhonePipe,
    CodePipe,
    ProductListComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [GetProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
