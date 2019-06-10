import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-widget-barra',
  templateUrl: './widget-barra.component.html',
  styleUrls: ['./widget-barra.component.scss']
})
export class WidgetBarraComponent implements OnInit {

  @Input()
  public widgets: Lista[];

  public barChartData: Array<ChartDataSets[]> = [];
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartOptions = {
    responsive: true,
    tooltips: {
      enabled: true
    },
    scales: {
      xAxes: [{
        gridLines:
        {
          display: false
        },
        ticks: {
          fontSize: 10,
          beginAtZero: true
        }
      }], yAxes: [{
        gridLines:
        {
          drawTicks: false
        },
        ticks: {
          fontSize: 9,
          padding: 10,
          beginAtZero: true
        }
      }]
    }
  };

  constructor() { }

  ngOnInit() {
    for (let datosWidget of this.widgets) {
      var data: ChartDataSets[] = [
        {
          data: datosWidget.listaDatosValor1,
          backgroundColor: datosWidget.Color_Valor1
        },
        {
          data: datosWidget.listaDatosValor2,
          backgroundColor: datosWidget.Color_Valor2
        },
      ]
      this.barChartData.push(data);
    }
  }

}
