import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-talent-level-up-3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './talent-level-up-3.component.html',
  styleUrl: './talent-level-up-3.component.css'
})
export class TalentLevelUp3Component {
  green: number | undefined;
  blue: number | undefined;
  purple: number | undefined;
  green1: number | undefined;
  blue1: number | undefined;
  purple1: number | undefined;
  green2: number | undefined;
  blue2: number | undefined;
  purple2: number | undefined;


  calc(): void {
    if (
      this.green !== undefined &&
      this.blue !== undefined &&
      this.purple !== undefined
    ) {
      if (this.green === 0 && this.blue === 0 && this.purple === 0) {
        // Handle division by zero error
        this.green = undefined;
        this.blue = undefined;
        this.purple = undefined;
      }
      // Main Logic for Calculating blue Mats
      else {
        this.blue1 = Math.floor(this.green / 3 + this.blue);
        this.green1 = this.green % 3;
        this.purple1 = this.purple;

        this.purple2 = Math.floor((this.green / 3 + this.blue) / 3 + this.purple);
        this.blue2 = Math.floor(this.green / 3 + this.blue) % 3;
        this.green2 = this.green % 3;
      }
    } else {
      this.green = undefined;
      this.blue = undefined;
      this.purple = undefined;
    }
  }
  clear(): void {
    this.green = undefined;
    this.blue = undefined;
    this.purple = undefined;
    this.green1 = undefined;
    this.blue1 = undefined;
    this.purple1 = undefined;
    this.green2 = undefined;
    this.blue2 = undefined;
    this.purple2 = undefined;
  }
}
