import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'auth-input',
  imports: [],
  templateUrl: './auth-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthInputComponent {
  label = input.required<string>();
  text = input<string>();
  placeholder = input<string>('');
  required = input.required<boolean>();

}
