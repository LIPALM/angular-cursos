import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search.component.html',
})
export class CountrySearch {

  // onSeacrh( value: String ) {
  //   console.log ({ value });
  // }
  placeholder = input('Search country by capital');
  timeSeconds = input(4000);
  initialValue = input<string>();


  value = output<string>();

  inputValue = linkedSignal<string>(() => this.initialValue() ?? '');


  debunceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit(value)
    }, this.timeSeconds());

    onCleanup(() => {
      clearTimeout(timeout);
    })
  })

}
