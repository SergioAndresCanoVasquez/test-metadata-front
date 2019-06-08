import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetProductoComponent } from './widget-producto.component';

describe('WidgetProductoComponent', () => {
  let component: WidgetProductoComponent;
  let fixture: ComponentFixture<WidgetProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
