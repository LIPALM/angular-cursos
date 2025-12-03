import { Component, computed, signal } from "@angular/core";
import { NgClass } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

interface Character {
  id: number;
  name: string;
  power: number;
}



@Component ({
  templateUrl: './dragonball-page.commponent.html',
  //imports: [NgClass]
})


export class DragonballPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 15001},
    // { id: 2, name: 'Vegeta', power: 14000},
    // { id: 4, name: 'Yamcha', power: 1000},
    // { id: 3, name: 'Picccolo', power: 11000},
  ]);

  addCharacter() {
    if ( !this.name() || !this.power() || this.power() <= 0)
      return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };

    this.characters.update((list) => [ ...list, newCharacter ]);
    this.resetFields()

    // this.characters().push( newCharacter );

    // const newCharacter = {
    //   id: Date.now(),
    //   name: this.name(),
    //   power: this.power()
    // };
    // this.characters().push(newCharacter);
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }


  //  powerClases = computed (() => {
  //    return {
  //      'text-danger': true,
  //    }
  //  });


}
