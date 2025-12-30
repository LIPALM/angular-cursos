import { afterNextRender, afterRender, Component, effect, OnChanges, OnInit, signal } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

const log = ( ...messages:string[]) => {
  console.log(
    `${ messages[0]} %c${ messages.slice(1).join(', ')} `,
    'color: #bada55;'
  );
};


@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnChanges {
  tradicionalProperty = 'Lucas tradicional'
  signalProperty = signal('Lucas signal')

  constructor() {
    log('Contructor: HomePageComponent');

    // setTimeout(() => {
    //   // no es recomendable hacer este tipo de cambios fuera de angular zone
    //   // this.tradicionalProperty = 'Lucas cambiado constructor'
    //   // console.log('hecho cambio tradicional desde constructor')

    //   // es mejor usar signal para que angular detecte el cambio hasta donde se pueda, tambien con sus modificaciones de sus DOM con senhales
    //   this.signalProperty.set('Lucas cambiado signal constructor')
    //   console.log('hecho cambio signal desde constructor')
    // }, 5000)

  }

  changeTradicional( ) {
    this.tradicionalProperty = 'Lucas cambiado tradicional'
  }

  changeSignal() {
    this.signalProperty.set('Lucas cambiado signal')
  }

  basicEffect = effect(( onCleanup ) => {
    log('effect', "Disparar efectos secundarios")


    onCleanup(() => {
      log('oncleanup', "Se ejecuta cuando el efecto se va a destruirng")
    })

  })

  ngOnInit() {
    log('ngOnInit', "Runs once after Angular initialized all the component's inputs.")
  }
  ngOnChanges() {
    log('ngOnChanges', "Runs every time the component's inputs have changed.")
  }
  ngDoCheck() {
    log('ngDoCheck', "Runs every time this component is checked for changes.")
  }
  ngAfterContentInit() {
    log('ngAfterContentInit', "Runs once after component's content has been initialized.")
  }
  ngAfterContentChecked() {
    log('ngAfterContentChecked', "Runs every time this component content has been checked for changes.")
  }
  ngAfterViewInit() {
    log('ngAfterViewInit', "Runs once after the component's view has been initialized.")
  }
  ngAfterViewChecked() {
    log('ngAfterViewChecked', "Runs every time the component's view has been checked for changes.")
  }

  ngOnDestroy() {
    log('ngOnDestroy', "Runs once just before Angular destroys the component.")
  }

  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRender', "Runs once after the next render of the component's view.")
  });

  afterRender = afterRender(() => {
    log('afterRender', "Runs after every render of the component's view.")
  })

}
