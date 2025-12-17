import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], //RouterOutlet colocar aqui si se usa en el html
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'pico-dorado';
}
