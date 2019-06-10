import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contenedor-secundario',
  templateUrl: './contenedor-secundario.component.html',
  styleUrls: ['./contenedor-secundario.component.scss']
})
export class ContenedorSecundarioComponent implements OnInit {



  public data: Data;
  public paginas: ListaPagina[];

  @Input()
  public mostrarPagina: number;

  constructor() {
    this.data = JSON.parse(localStorage.getItem('data'));
    this.paginas = this.data.agente.listaClientes[0].listaClientesInternos[0].listaPaginas;
  }

  ngOnInit() {
  }

}
