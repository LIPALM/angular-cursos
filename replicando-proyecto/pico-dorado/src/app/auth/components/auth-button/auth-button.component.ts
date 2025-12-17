import { ChangeDetectionStrategy, Component, input } from '@angular/core';

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
}
