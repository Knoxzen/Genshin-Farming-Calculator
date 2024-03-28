import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weapon-stone-4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weapon-stone-4.component.html',
  styleUrl: './weapon-stone-4.component.css',
})
export class WeaponStone4Component {
  green: number | undefined;
  blue: number | undefined;
  purple: number | undefined;
  gold: number | undefined;
  green1: number | undefined;
  blue1: number | undefined;
  purple1: number | undefined;
  gold1: number | undefined;
  green2: number | undefined;
  blue2: number | undefined;
  purple2: number | undefined;
  gold2: number | undefined;
  green3: number | undefined;
  blue3: number | undefined;
  purple3: number | undefined;
  gold3: number | undefined;

  calc(): void {
    if (
      this.green !== undefined &&
      this.blue !== undefined &&
      this.purple !== undefined &&
      this.gold !== undefined
    ) {
      if (
        this.green === 0 &&
        this.blue === 0 &&
        this.purple === 0 &&
        this.gold === 0
      ) {
        // Handle division by zero error
        this.green = undefined;
        this.blue = undefined;
        this.purple = undefined;
        this.gold = undefined;
      }
      // Main Logic for Calculating blue Mats
      else {
        this.blue1 = Math.floor(this.green / 3 + this.blue);
        this.green1 = this.green % 3;
        this.purple1 = this.purple;
        this.gold1 = this.gold;

        this.purple2 = Math.floor((this.green / 3 + this.blue) / 3 + this.purple);
        this.blue2 = Math.floor(this.green / 3 + this.blue) % 3;
        this.green2 = this.green % 3;
        this.gold2 = this.gold;

        this.gold3 = Math.floor((this.purple2)/3 + this.gold);
        this.purple3 = Math.floor((this.purple2) % 3);
        this.green3 = this.green2;
        this.blue3 = this.blue2;
      }
    } else {
      this.green = undefined;
      this.blue = undefined;
      this.purple = undefined;
      this.gold = undefined;
    }
  }
  clear(): void {
    this.green = undefined;
    this.blue = undefined;
    this.purple = undefined;
    this.gold = undefined;
    this.green1 = undefined;
    this.blue1 = undefined;
    this.purple1 = undefined;
    this.gold1 = undefined;
    this.green2 = undefined;
    this.blue2 = undefined;
    this.purple2 = undefined;
    this.gold2 = undefined;
  }
}
