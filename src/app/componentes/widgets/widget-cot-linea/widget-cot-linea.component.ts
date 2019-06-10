import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-widget-cot-linea',
  templateUrl: './widget-cot-linea.component.html',
  styleUrls: ['./widget-cot-linea.component.scss']
})
export class WidgetCotLineaComponent implements OnInit {

  @Input()
  public widgets: Lista[];


  public barChartDataLinea: Array<ChartDataSets[]> = [];
  public barChartLabelsLinea: Array<string[]> = [];
  public barChartTypeLinea = 'line';
  public barChartLegendLinea = false;
  public barChartOptionsLinea = {
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
          beginAtZero: true,
          stepSize: 20,
          suggestedMax: 100
        }
      }]
    }
  };

  constructor() { }

  ngOnInit() {
    console.log(this.widgets);
    for (let datosWidget of this.widgets) {
      var dataLine: ChartDataSets[] = [
        {
          data: [
            parseInt(datosWidget.Agrupador1_Valor1),
            parseInt(datosWidget.Agrupador2_Valor1),
            parseInt(datosWidget.Agrupador3_Valor1),
            parseInt(datosWidget.Agrupador4_Valor1),
            parseInt(datosWidget.Agrupador5_Valor1),
            parseInt(datosWidget.Agrupador6_Valor1),
          ],
          backgroundColor: datosWidget.Color_Valor1
        }
      ];
      var labelsLine = [
        datosWidget.Nombre_Agrupador1,
        datosWidget.Nombre_Agrupador2,
        datosWidget.Nombre_Agrupador3,
        datosWidget.Nombre_Agrupador4,
        datosWidget.Nombre_Agrupador5,
        datosWidget.Nombre_Agrupador6
      ];
      this.barChartLabelsLinea.push(labelsLine);
      this.barChartDataLinea.push(dataLine);
    }
    console.log(this.barChartLabelsLinea);
    console.log(this.barChartDataLinea);
  }


}
