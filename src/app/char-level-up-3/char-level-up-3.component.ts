import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-char-level-up-3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './char-level-up-3.component.html',
  styleUrl: './char-level-up-3.component.css',
})
export class CharLevelUp3Component {
  grey: number | undefined;
  green: number | undefined;
  blue: number | undefined;
  grey1: number | undefined;
  green1: number | undefined;
  blue1: number | undefined;
  grey2: number | undefined;
  green2: number | undefined;
  blue2: number | undefined;


  ResGreen(): void {
    if (
      this.grey !== undefined &&
      this.green !== undefined &&
      this.blue !== undefined
    ) {
      if (this.grey === 0 && this.green === 0 && this.blue === 0) {
        // Handle division by zero error
        this.grey = undefined;
        this.green = undefined;
        this.blue = undefined;
      }
      // Main Logic for Calculating Green Mats
      else {
        this.green1 = Math.floor(this.grey / 3 + this.green);
        this.grey1 = this.grey % 3;
        // this.resBlue = Math.floor(this.resGreen / 3 + this.blue);
        this.blue1 = this.blue;

        this.blue2 = Math.floor((this.grey / 3 + this.green) / 3 + this.blue);
        this.green2 = Math.floor(this.grey / 3 + this.green) % 3;
        this.grey2 = this.grey % 3;
      }
    } else {
      // Handle case where not all values are defined
      this.grey = undefined;
      this.green = undefined;
      this.blue = undefined;
    }
  }
  clear(): void {
    this.grey = undefined;
    this.green = undefined;
    this.blue = undefined;
    this.grey1 = undefined;
    this.green1 = undefined;
    this.blue1 = undefined;
    this.grey2 = undefined;
    this.green2 = undefined;
    this.blue2 = undefined;
  }
}
