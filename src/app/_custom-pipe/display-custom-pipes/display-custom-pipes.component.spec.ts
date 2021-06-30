import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCustomPipesComponent } from './display-custom-pipes.component';

describe('DisplayCustomPipesComponent', () => {
  let component: DisplayCustomPipesComponent;
  let fixture: ComponentFixture<DisplayCustomPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCustomPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCustomPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
