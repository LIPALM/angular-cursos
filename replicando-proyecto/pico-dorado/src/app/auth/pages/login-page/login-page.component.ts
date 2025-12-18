import { Component, inject, signal } from '@angular/core';
import { AuthLayoutComponent } from "../../components/auth-layout/auth-layout.component";
import { AuthInputComponent } from "../../components/auth-input/auth-input.component";
import { AuthButtonComponent } from "../../components/auth-button/auth-button.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'login-page',
  imports: [RouterLink, AuthLayoutComponent, AuthInputComponent, AuthButtonComponent],
  templateUrl: './login-page.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  private router = inject(Router);

  email = signal('');
  password = signal('');

  onlogin() {
    if (!this.email() || !this.password()) {
      console.log('Faltan datos por completar');
      return;
    }
    this.router.navigate(['/dashboard']);
  }
}
