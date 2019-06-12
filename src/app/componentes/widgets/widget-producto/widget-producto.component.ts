import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

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
    for(let widget of this.widgets){
      widget.Icogra_Agrup1 = environment.imagenes + widget.Icogra_Agrup1;
      widget.Icogra_Agrup2 = environment.imagenes + widget.Icogra_Agrup2;
      widget.Icogra_Agrup3 = environment.imagenes + widget.Icogra_Agrup3;
      widget.Icogra_Agrup4 = environment.imagenes + widget.Icogra_Agrup4;
      widget.Icogra_Agrup5 = environment.imagenes + widget.Icogra_Agrup5;
      widget.Icogra_Agrup6 = environment.imagenes + widget.Icogra_Agrup6;
    }
    console.log(this.widgets);
  }

}
