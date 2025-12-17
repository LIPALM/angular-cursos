import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'register-page.component',
  imports: [RouterLink],
  templateUrl: './register-page.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent { }
