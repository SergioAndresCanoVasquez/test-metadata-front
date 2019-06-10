import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCotComponent } from './widget-cot.component';

describe('WidgetCotComponent', () => {
  let component: WidgetCotComponent;
  let fixture: ComponentFixture<WidgetCotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetCotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
