import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorSecundarioComponent } from './contenedor-secundario.component';

describe('ContenedorSecundarioComponent', () => {
  let component: ContenedorSecundarioComponent;
  let fixture: ComponentFixture<ContenedorSecundarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorSecundarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
