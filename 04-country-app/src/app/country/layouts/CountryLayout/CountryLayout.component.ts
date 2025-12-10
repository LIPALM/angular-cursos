import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuSuperior } from "../../components/menu-superior/menu-superior.component";

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, MenuSuperior],
  templateUrl: './CountryLayout.component.html',
})
export class CountryLayoutComponent { }
