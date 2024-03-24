import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponStone4Component } from './weapon-stone-4.component';

describe('WeaponStone4Component', () => {
  let component: WeaponStone4Component;
  let fixture: ComponentFixture<WeaponStone4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponStone4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponStone4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
