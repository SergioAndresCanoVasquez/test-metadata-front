import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCotLineaComponent } from './widget-cot-linea.component';

describe('WidgetCotLineaComponent', () => {
  let component: WidgetCotLineaComponent;
  let fixture: ComponentFixture<WidgetCotLineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetCotLineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCotLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
