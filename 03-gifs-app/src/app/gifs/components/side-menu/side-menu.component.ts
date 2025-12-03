import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuOptionsComponent } from '../menu-options/menu-options.component';
import { MenuHeaderComponent } from '../menu-header/menu-header.component';

@Component({
  selector: 'gifs-side-menu',
  imports: [MenuOptionsComponent, MenuHeaderComponent],
  templateUrl: './side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {

}
