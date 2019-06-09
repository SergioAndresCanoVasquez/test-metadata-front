import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBarraComponent } from './widget-barra.component';

describe('WidgetBarraComponent', () => {
  let component: WidgetBarraComponent;
  let fixture: ComponentFixture<WidgetBarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetBarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
