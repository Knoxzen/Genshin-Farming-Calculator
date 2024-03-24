import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentLevelUp3Component } from './talent-level-up-3.component';

describe('TalentLevelUp3Component', () => {
  let component: TalentLevelUp3Component;
  let fixture: ComponentFixture<TalentLevelUp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentLevelUp3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalentLevelUp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
