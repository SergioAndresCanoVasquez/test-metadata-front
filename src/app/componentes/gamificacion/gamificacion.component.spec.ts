import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamificacionComponent } from './gamificacion.component';

describe('GamificacionComponent', () => {
  let component: GamificacionComponent;
  let fixture: ComponentFixture<GamificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
