import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-producto',
  templateUrl: './widget-producto.component.html',
  styleUrls: ['./widget-producto.component.scss']
})
export class WidgetProductoComponent implements OnInit {


  @Input()
  public widgets: Lista[];

  constructor() { }

  ngOnInit() {
  }

}
