import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMetaComponent } from './widget-meta.component';

describe('WidgetMetaComponent', () => {
  let component: WidgetMetaComponent;
  let fixture: ComponentFixture<WidgetMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
