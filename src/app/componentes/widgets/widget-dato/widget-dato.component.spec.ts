import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDatoComponent } from './widget-dato.component';

describe('WidgetDatoComponent', () => {
  let component: WidgetDatoComponent;
  let fixture: ComponentFixture<WidgetDatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
