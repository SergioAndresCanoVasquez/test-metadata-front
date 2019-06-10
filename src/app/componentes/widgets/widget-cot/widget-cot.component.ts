import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-cot',
  templateUrl: './widget-cot.component.html',
  styleUrls: ['./widget-cot.component.scss']
})
export class WidgetCotComponent implements OnInit {

  @Input()
  widgets: Lista[];

  constructor() { }

  ngOnInit() {
  }

}
