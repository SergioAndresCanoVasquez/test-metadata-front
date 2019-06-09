import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPodioComponent } from './widget-podio.component';

describe('WidgetPodioComponent', () => {
  let component: WidgetPodioComponent;
  let fixture: ComponentFixture<WidgetPodioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPodioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPodioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
