import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';
import { DbzService } from '../dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent  {

      constructor( public dbzService: DbzService) { }

      get characters() : Character[] {

            return [...this.dbzService.characters];

      }
      onDeleteCharacter( id :  string): void {
            this.dbzService.deleteCharacterById( id );
      }
      onNewCharacter( character: Character ) {
            this.dbzService.addCharacter( character);
      }

}
