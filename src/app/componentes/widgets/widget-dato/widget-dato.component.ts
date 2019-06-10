import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-widget-dato',
  templateUrl: './widget-dato.component.html',
  styleUrls: ['./widget-dato.component.scss']
})
export class WidgetDatoComponent implements OnInit {

  @Input()
  public widgets: Lista[];

  public itemsModal: ListaItem[];
  public tituloModal: string;

  constructor() { }

  ngOnInit() {
    this.itemsModal = this.widgets[0].listaItems;
    this.tituloModal = this.widgets[0].Tema_Descripcion;
  }

  showWidgetDatoInModal(index: number) {
    this.itemsModal = this.widgets[index].listaItems;
    this.tituloModal = this.widgets[index].Tema_Descripcion;
  }
}
