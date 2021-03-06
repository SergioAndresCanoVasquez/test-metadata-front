import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor-principal',
  templateUrl: './contenedor-principal.component.html',
  styleUrls: ['./contenedor-principal.component.scss']
})
export class ContenedorPrincipalComponent implements OnInit {

  public mostrarPagina: number = 0;

  constructor() { }

  ngOnInit() {
  }

  paginaMostrar(numeroPagina) {
    this.mostrarPagina = numeroPagina;
  }
}
