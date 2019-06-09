import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorWidgetComponent } from './constructor-widget.component';

describe('ConstructorWidgetComponent', () => {
  let component: ConstructorWidgetComponent;
  let fixture: ComponentFixture<ConstructorWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructorWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
