import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModuleSelectorComponent } from "./mod-selector/mod-selector.component";
import { CharLevelUp3Component } from './char-level-up-3/char-level-up-3.component';
import { WeaponStone4Component } from './weapon-stone-4/weapon-stone-4.component';
import { TalentLevelUp3Component } from './talent-level-up-3/talent-level-up-3.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CharLevelUp3Component,TalentLevelUp3Component, WeaponStone4Component, ModuleSelectorComponent]
})
export class AppComponent {
  title = 'genshin-calculator';

}
