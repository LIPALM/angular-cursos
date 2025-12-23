import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AuthButtonComponent } from "../../../auth/components/auth-button/auth-button.component";
import { ButtonAgregarPedido } from "../../components/button-agregar-pedido/button-agregar-pedido.component";

@Component({
  selector: 'dashboard-caja',
  imports: [ButtonAgregarPedido],
  templateUrl: './dashboard-caja.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardCajaComponent {

}
