import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapeItemComponent } from './tape-item.component';

describe('TapeItemComponent', () => {
  let component: TapeItemComponent;
  let fixture: ComponentFixture<TapeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
