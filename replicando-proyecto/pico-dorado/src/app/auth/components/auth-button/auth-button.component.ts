import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'auth-button',
  imports: [],
  templateUrl: './auth-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full max-w-xs'
  }
})
export class AuthButtonComponent {
  buttonText = input.required<string>();
  buttonClick = output<void>();
}
