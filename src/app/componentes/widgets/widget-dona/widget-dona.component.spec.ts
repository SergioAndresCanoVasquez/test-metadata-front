import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDonaComponent } from './widget-dona.component';

describe('WidgetDonaComponent', () => {
  let component: WidgetDonaComponent;
  let fixture: ComponentFixture<WidgetDonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
