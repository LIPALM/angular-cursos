import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'auth-layout',
  imports: [],
  templateUrl: './auth-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {
  imageUrl = input.required<string>();
}
