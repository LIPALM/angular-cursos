import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarHeaderComponent } from "../sidebar-header/sidebar-header.component";
import { SidebarFooterComponent } from "../sidebar-footer/sidebar-footer.component";
import { SidebarMenuComponent } from "../sidebar-menu/sidebar-menu.component";
import { MenuOption } from '../../interface/menu-option.interface';

@Component({
  selector: 'sidebar-options',
  imports: [SidebarHeaderComponent, SidebarFooterComponent, SidebarMenuComponent],
  templateUrl: './sidebar-options.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarOptionsComponent {
}
