import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'auth-input',
  imports: [],
  templateUrl: './auth-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthInputComponent {
  label = input.required<string>();
  type = input<string>();
  placeholder = input<string>('');
  required = input.required<boolean>();

  value = input<string>('');
  valueChange = output<string>();

}
