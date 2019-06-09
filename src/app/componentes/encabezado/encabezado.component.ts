import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  public data: Data;
  public encabezado: ListaClientesInterno;

  constructor() {
    this.data = JSON.parse(localStorage.getItem('data'));
    this.encabezado = this.data.agente.listaClientes[0].listaClientesInternos[0];
  }

  ngOnInit() {
  }

}
