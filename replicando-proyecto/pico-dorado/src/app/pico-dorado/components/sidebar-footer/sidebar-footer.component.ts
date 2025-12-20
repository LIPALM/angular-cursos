import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'sidebar-footer',
  imports: [RouterLink],
  templateUrl: './sidebar-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarFooterComponent {
  buttonText = input.required<string>();
}
