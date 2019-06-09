import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent implements OnInit {

  @Input()
  public seccion: ListaSeccione;
  @Input()
  public numeroPagina: number;
  @Input()
  public numeroSeccion: number;

  public widgets: ListaWidget[];

  public widgetsPosicion1: ListaWidget;
  public widgetsPosicion2: ListaWidget;
  public widgetsPosicion3: ListaWidget;
  public widgetsPosicion4: ListaWidget;



  constructor() {
  }

  ngOnInit() {
    this.widgets = this.seccion.listaWidgets;
    this.llenarPosiciones(this.widgets)
  }

  llenarPosiciones(widgets: ListaWidget[]) {
    for (let widget of widgets) {
      switch (widget.posicion) {
        case 1:
          this.widgetsPosicion1 = widget;
          break;
        case 2:
          this.widgetsPosicion2 = widget;
          break;
        case 3:
          this.widgetsPosicion3 = widget;
          break;
        case 4:
          this.widgetsPosicion4 = widget;
          break;

        default:
          break;
      }
    }
  }

}
