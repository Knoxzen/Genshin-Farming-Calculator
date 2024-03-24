import { Routes } from '@angular/router';
import { TalentLevelUp3Component } from './talent-level-up-3/talent-level-up-3.component';
import { CharLevelUp3Component } from './char-level-up-3/char-level-up-3.component';
import { WeaponStone4Component } from './weapon-stone-4/weapon-stone-4.component';

export const routes: Routes = [
  { path: '', redirectTo: '/charLvlUp', pathMatch: 'full' },
  { path: 'charLvlUp', component: CharLevelUp3Component },
  { path: 'weaponStone', component: WeaponStone4Component },
  { path: 'talentLvlUp', component: TalentLevelUp3Component },
];
