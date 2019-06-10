import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetImagenComponent } from './widget-imagen.component';

describe('WidgetImagenComponent', () => {
  let component: WidgetImagenComponent;
  let fixture: ComponentFixture<WidgetImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
