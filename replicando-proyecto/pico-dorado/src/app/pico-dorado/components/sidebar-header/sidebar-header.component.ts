import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

// const environment: Environment = {
//     Titulo: 'Pico Dorado',
//     Abrevacion: 'PD',
//     Rol: 'Caja'
//   };

@Component({
  selector: 'sidebar-header',
  imports: [],
  templateUrl: './sidebar-header.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})


export class SidebarHeaderComponent {
  // titulo = environment.Titulo;
  // abrevacion = environment.Abrevacion;
  // caja = environment.Rol;
  env = environment;


}



