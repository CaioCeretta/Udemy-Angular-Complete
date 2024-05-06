import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesRecapComponent } from './directives-recap.component';

describe('DirectivesRecapComponent', () => {
  let component: DirectivesRecapComponent;
  let fixture: ComponentFixture<DirectivesRecapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesRecapComponent]
    });
    fixture = TestBed.createComponent(DirectivesRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
