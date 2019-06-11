import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss']
})
export class NavegadorComponent implements OnInit {

  public data: Data;
  public paginas: ListaPagina[];
  public botonesPagina: HTMLCollection;

  @Output() mostrarPagina = new EventEmitter<number>();

  constructor() {
    this.data = JSON.parse(localStorage.getItem('data'));
    this.paginas = this.data.agente.listaClientes[0].listaClientesInternos[0].listaPaginas;
  }

  ngOnInit() {

  }

  paginaMostrar(event: any) {
    this.botonesPagina = document.getElementsByClassName('nav-link');
    if(event.target.name === undefined){
      this.mostrarPagina.emit(parseInt(event.target.parentElement.name));
    }else{
      this.mostrarPagina.emit(parseInt(event.target.name));
    }
    Array.prototype.forEach.call(this.botonesPagina, function (tag) {
      if (event.target.className === 'fa fa-home fa-lg') {
        if (tag.name === event.target.parentElement.name) {
          tag.className = 'nav-link active';
        } else {
          tag.className = 'nav-link';
        }
      }else if (tag.name === event.target.name) {
        tag.className = 'nav-link active';
      } else {
        tag.className = 'nav-link'
      }
    });
  }

}
