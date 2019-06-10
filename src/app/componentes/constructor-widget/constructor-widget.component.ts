import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-constructor-widget',
  templateUrl: './constructor-widget.component.html',
  styleUrls: ['./constructor-widget.component.scss']
})
export class ConstructorWidgetComponent implements OnInit {

  @Input()
  public tipoWidget: ListaWidget;

  public listaWidgets: Lista[];

  constructor() { }

  ngOnInit() {
    this.listaWidgets = this.tipoWidget.lista;
    console.log(this.tipoWidget);
    console.log(this.listaWidgets);
  }

}
