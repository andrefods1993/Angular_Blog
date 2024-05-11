import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTertiaryComponent } from './section-tertiary.component';

describe('SectionTertiaryComponent', () => {
  let component: SectionTertiaryComponent;
  let fixture: ComponentFixture<SectionTertiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTertiaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionTertiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
