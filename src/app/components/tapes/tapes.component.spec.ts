import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapesComponent } from './tapes.component';

describe('TapesComponent', () => {
  let component: TapesComponent;
  let fixture: ComponentFixture<TapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
