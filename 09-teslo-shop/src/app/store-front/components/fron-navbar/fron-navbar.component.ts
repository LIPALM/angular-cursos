import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'fron-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './fron-navbar.component.html',
})
export class FronNavbarComponent {
  authService = inject(AuthService);
}
