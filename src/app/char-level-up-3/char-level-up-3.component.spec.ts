import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharLevelUp3Component } from './char-level-up-3.component';

describe('CharLevelUp3Component', () => {
  let component: CharLevelUp3Component;
  let fixture: ComponentFixture<CharLevelUp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharLevelUp3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharLevelUp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
