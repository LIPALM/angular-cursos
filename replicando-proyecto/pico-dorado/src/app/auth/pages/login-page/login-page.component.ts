import { Component } from '@angular/core';
import { AuthLayoutComponent } from "../../components/auth-layout/auth-layout.component";
import { AuthInputComponent } from "../../components/auth-input/auth-input.component";
import { AuthButtonComponent } from "../../components/auth-button/auth-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'login-page',
  imports: [RouterLink, AuthLayoutComponent, AuthInputComponent, AuthButtonComponent],
  templateUrl: './login-page.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent { }
