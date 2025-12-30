import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { FronNavbarComponent } from "../../components/fron-navbar/fron-navbar.component";

@Component({
  selector: 'app-store-front-layout',
  imports: [RouterOutlet, FronNavbarComponent],
  templateUrl: './store-front-layout.component.html',
})
export class StoreFrontLayoutComponent { }
