import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-barra',
  templateUrl: './widget-barra.component.html',
  styleUrls: ['./widget-barra.component.scss']
})
export class WidgetBarraComponent implements OnInit {

  @Input()
  public widgets: Lista[];

  constructor() { }

  ngOnInit() {
  }

}
