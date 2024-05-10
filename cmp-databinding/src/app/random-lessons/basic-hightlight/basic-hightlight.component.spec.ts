import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHightlightComponent } from './basic-hightlight.component';

describe('BasicHightlightComponent', () => {
  let component: BasicHightlightComponent;
  let fixture: ComponentFixture<BasicHightlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicHightlightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicHightlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
