import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mod-selector',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mod-selector.component.html',
  styleUrl: './mod-selector.component.css'
})
export class ModuleSelectorComponent {
  clickedModule: string | null = null;


  constructor(private router: Router) { 
    this.router.navigateByUrl('/charLvlUp');
    this.selectModule('char');
  }
  

  selectModule(module: string): void {
    
    this.clickedModule = module;
    if (module === 'char') {
      this.router.navigateByUrl('/charLvlUp');
      
    } 
    else if (module === 'talent') {
      this.router.navigateByUrl('/talentLvlUp');
      
    }
    else {
      this.router.navigateByUrl(`/weaponStone`);
    }
  }
  isButtonClicked(module: string): boolean {
    return this.clickedModule === module;
  }
}