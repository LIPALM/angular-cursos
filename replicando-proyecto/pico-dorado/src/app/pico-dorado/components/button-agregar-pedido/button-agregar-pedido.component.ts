import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'button-agregar-pedido',
  imports: [],
  templateUrl: './button-agregar-pedido.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonAgregarPedido {
  buttonText = input.required<string>();
}
