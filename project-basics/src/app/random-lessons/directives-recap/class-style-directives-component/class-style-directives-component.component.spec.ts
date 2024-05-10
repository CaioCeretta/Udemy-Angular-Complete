import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStyleDirectivesComponentComponent } from './class-style-directives-component.component';

describe('ClassStyleDirectivesComponentComponent', () => {
  let component: ClassStyleDirectivesComponentComponent;
  let fixture: ComponentFixture<ClassStyleDirectivesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassStyleDirectivesComponentComponent]
    });
    fixture = TestBed.createComponent(ClassStyleDirectivesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
