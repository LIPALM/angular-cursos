import { Component, inject, Inject } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-app/character-add.component";
import { DragonballService } from '../../services/dragonball.service';

@Component ({
  templateUrl: './dragonball-super-page.commponent.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],

})

export class DragonballSuperPageComponent{
  public dragonballService = inject(DragonballService)
}
