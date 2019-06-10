import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bloque',
  templateUrl: './bloque.component.html',
  styleUrls: ['./bloque.component.scss']
})
export class BloqueComponent implements OnInit {

  @Input()
  public bloque: Listabloque;
  @Input()
  public numeroPagina: number;
  @Input()
  public numeroBloque: number;

  public widgets: ListaWidget[];

  public widgetsPosicion1: ListaWidget;
  public widgetsPosicion2: ListaWidget;
  public widgetsPosicion3: ListaWidget;
  public widgetsPosicion4: ListaWidget;

  constructor() {
  }

  ngOnInit() {
    this.widgets = this.bloque.listaWidgets;
    if (this.bloque.tipo === 'bloque_1_3') {
      this.llenarPosiciones(this.widgets)
    }
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
      }
    }
  }

  expandirBloque() {
    if (this.bloque.expandido) {
      this.bloque.expandido = false;
    }else{
      this.bloque.expandido = true;
    }
  }

}
