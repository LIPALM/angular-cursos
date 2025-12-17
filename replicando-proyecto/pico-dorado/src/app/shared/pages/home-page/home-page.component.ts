import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'home-page',
  imports: [RouterLink], //RouterLink
  templateUrl: './home-page.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
}
