import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthSocialComponent } from '../../components/auth-social/auth-social.component';
import { AuthInputComponent } from '../../components/auth-input/auth-input.component';
import { AuthButtonComponent } from "../../components/auth-button/auth-button.component";
import { AuthLayoutComponent } from "../../components/auth-layout/auth-layout.component";


@Component({
  selector: 'register-page.component',
  imports: [RouterLink, AuthSocialComponent, AuthInputComponent, AuthButtonComponent, AuthLayoutComponent],
  templateUrl: './register-page.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
  private router = inject(Router);


  nombre = signal('');
  email = signal('');
  password = signal('');

  onRegister() {
    if (!this.nombre() || !this.email() || !this.password()) {
      console.log('Faltan datos por completar');
      return;
    }
    this.router.navigate(['/dashboard']);
  }
}
