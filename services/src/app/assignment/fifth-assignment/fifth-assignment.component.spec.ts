import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthAssignmentComponent } from './fifth-assignment.component';

describe('FifthAssignmentComponent', () => {
  let component: FifthAssignmentComponent;
  let fixture: ComponentFixture<FifthAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FifthAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FifthAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
