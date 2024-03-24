import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weapon-stone-4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weapon-stone-4.component.html',
  styleUrl: './weapon-stone-4.component.css'
})
export class WeaponStone4Component {
  a: number | undefined;
  b: number | undefined;
  c: number | undefined;
  d: number | undefined;
  result: number | null = null;

  calculate(): void {
    if (this.a !== undefined && this.b !== undefined && this.c !== undefined && this.d !== undefined) {
      if (this.a === 0 && this.b === 0 && this.c === 0 && this.d === 0) {
        // Handle division by zero error
        this.result = null;
      } else {
        this.result = Math.floor(((this.a/3 + this.b)/3 + this.c)/3 + this.d);
      }
    } else {
      // Handle case where not all values are defined
      this.result = null;
    }
  }

  clear(): void {
    this.a = undefined;
    this.b = undefined;
    this.c = undefined;
    this.d = undefined;
    this.result = null;
  }
}