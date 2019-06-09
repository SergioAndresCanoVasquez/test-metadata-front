import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-meta',
  templateUrl: './widget-meta.component.html',
  styleUrls: ['./widget-meta.component.scss']
})
export class WidgetMetaComponent implements OnInit {

  @Input()
  public widgets: Lista[];

  constructor() { }

  ngOnInit() {
  }

}
