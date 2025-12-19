import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarHeaderComponent } from "../sidebar-header/sidebar-header.component";
import { SidebarFooterComponent } from "../sidebar-footer/sidebar-footer.component";

@Component({
  selector: 'sidebar-options',
  imports: [SidebarHeaderComponent, SidebarFooterComponent],
  templateUrl: './sidebar-options.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarOptionsComponent { }
