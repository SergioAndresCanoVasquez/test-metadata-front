import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-podio',
  templateUrl: './widget-podio.component.html',
  styleUrls: ['./widget-podio.component.scss']
})
export class WidgetPodioComponent implements OnInit {

  @Input()
  public widgets: Lista[];

  constructor() { }

  ngOnInit() {
  }

}
