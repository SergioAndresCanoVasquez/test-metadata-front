import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-dona',
  templateUrl: './widget-dona.component.html',
  styleUrls: ['./widget-dona.component.scss']
})
export class WidgetDonaComponent implements OnInit {

  @Input()
  public Titulo: string;
  @Input()
  public Color_titulo: string;
  @Input()
  public Valor_Enfasis: string;
  @Input()
  public Valor_Restante: string;
  @Input()
  public Color_Valor_Enfasis: string;
  @Input()
  public Descripcion1: string;
  @Input()
  public Color_descripcion1: string;
  @Input()
  public Descripcion2: string;
  @Input()
  public Color_descripcion2: string;
  @Input()
  public Descripcion3: string;
  @Input()
  public Color_descripcion3: string;
  @Input()
  public Descripcion4: string;
  @Input()
  public Color_descripcion4: string;
  @Input()
  public Color_MenorDona: string;
  @Input()
  public Color_MayorDona: string;
  @Input()
  public IconoGrafica: string;
  @Input()
  public Tipo_de_Dona: string;

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    cutoutPercentage: 78,
    color: [this.Color_MayorDona || '#FFC5D5', this.Color_MenorDona || '#FFDB89']
  };
  public barChartLabels = ['Vendidos', 'Faltantes'];
  public barChartType = this.Tipo_de_Dona || 'doughnut';
  public barChartLegend = false;
  public barChartData = [
    { data: [this.Valor_Enfasis, this.Valor_Restante] }
  ];

  constructor() {

  }

  ngOnInit() {

  }

}
