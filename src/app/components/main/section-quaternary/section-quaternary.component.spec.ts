import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionQuaternaryComponent } from './section-quaternary.component';

describe('SectionQuaternaryComponent', () => {
  let component: SectionQuaternaryComponent;
  let fixture: ComponentFixture<SectionQuaternaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionQuaternaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionQuaternaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
