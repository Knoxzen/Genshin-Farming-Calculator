import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModSelectorComponent } from './mod-selector.component';

describe('ModSelectorComponent', () => {
  let component: ModSelectorComponent;
  let fixture: ComponentFixture<ModSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
