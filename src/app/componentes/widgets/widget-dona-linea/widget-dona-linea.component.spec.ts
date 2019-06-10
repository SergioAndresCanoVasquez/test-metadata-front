import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDonaLineaComponent } from './widget-dona-linea.component';

describe('WidgetDonaLineaComponent', () => {
  let component: WidgetDonaLineaComponent;
  let fixture: ComponentFixture<WidgetDonaLineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDonaLineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDonaLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
