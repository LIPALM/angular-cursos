import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarOptionsComponent } from "../../components/sidebar-options/sidebar-options.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'dashboard-page',
  imports: [SidebarOptionsComponent, RouterOutlet],
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent { }
