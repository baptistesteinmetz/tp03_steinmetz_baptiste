import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'liste-produit';
  env = environment;
  // data = Array[];


}
