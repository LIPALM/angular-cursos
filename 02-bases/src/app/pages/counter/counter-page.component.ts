import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 10px;
      width: 70px;
      rounded: 10px;
      border-radius: 10px;
      background-color: green;
      border: none;
      color: white;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CounterPageComponent {
  counter = 10;
  conterSignal = signal(10);


//  constructor() {
//    setInterval(() => {
//      //this.counter += 1;
//      console.log('tick', this.counter);
//      this.conterSignal.update( (current) => current + 1)
//    }, 2000);
//  }


  increseBy ( value: number)  {
    this.counter += value;
    //this.conterSignal.set(this.conterSignal() + value);
    this.conterSignal.update( (current) => current + value)
  }

  reset(){
    this.counter = 0;
    this.conterSignal.set(0);
  }
}
