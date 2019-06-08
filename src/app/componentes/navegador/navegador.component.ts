import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss']
})
export class NavegadorComponent implements OnInit {

  public data: Data;
  public paginas: ListaPagina[];

  @Output() mostrarPagina = new EventEmitter<number>();

  constructor() {
    this.data = JSON.parse(localStorage.getItem('data'));
    this.paginas = this.data.agente.listaClientes[0].listaClientesInternos[0].listaPaginas;
  }

  ngOnInit() {
  }

  paginaMostrar(event:any){
    this.mostrarPagina.emit(parseInt(event.target.name));
    console.log(event.target.name);
  }

}
