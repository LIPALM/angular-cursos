import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';
import { heroes } from '../../data/heroes.data';

const cliente1 = {
  nombre: 'Fernando',
  gender: 'masculino',
  edad: 35,
  direccion: 'Ottawa, Canada'
}

const cliente2 = {
  nombre: 'Melissa',
  gender: 'femenino',
  edad: 25,
  direccion: 'New York, USA'
}


@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe
],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  // i18n select
  cliente = signal(cliente1);


  invitionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  }

  changeCliente() {
    if (this.cliente() === cliente1) {
      this.cliente.set(cliente2);
      return
    }
    this.cliente.set(cliente1);
  }

  // i18n plural
  clienteMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  })

  clientes = signal([
    'Maria',
    'Pedro',
    'Juan',
    'Ana',
    'Luis']
  )

  deleteCliente() {
    this.clientes.update((current) => current.slice(1));
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada',
    profesion: 'Desarrollador Web'
  }

  // Async Pipe
  promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
      console.log('Promise resolved');
    }, 3500);
  });

  myObservable = interval(1000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('Observable value:', value)));

}

