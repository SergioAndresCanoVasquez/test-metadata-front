import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-widget-imagen',
  templateUrl: './widget-imagen.component.html',
  styleUrls: ['./widget-imagen.component.scss'],
  providers: [ NgbCarouselConfig ]
})
export class WidgetImagenComponent implements OnInit {

  @Input()
  public widgets: Lista[];

  public imagenes: ListaItem[];

  showNavigationArrows = true;
  showNavigationIndicators = true;

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.imagenes = this.widgets[0].listaItems;
  }

}
