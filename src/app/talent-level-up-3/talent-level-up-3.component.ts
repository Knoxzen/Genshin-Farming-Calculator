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
  a: number | undefined;
  b: number | undefined;
  c: number | undefined;
  result: number | null = null;

  calculate(): void {
    if (this.a !== undefined && this.b !== undefined && this.c !== undefined) {
      if (this.a === 0 && this.b === 0 && this.c === 0) {
        // Handle division by zero error
        this.result = null;
      } else {
        this.result = Math.floor((this.a/3 + this.b)/3 + this.c);
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
    this.result = null;
  }
}