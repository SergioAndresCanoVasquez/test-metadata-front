import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-widget-dona-linea',
  templateUrl: './widget-dona-linea.component.html',
  styleUrls: ['./widget-dona-linea.component.scss']
})
export class WidgetDonaLineaComponent implements OnInit {

  @Input()
  public widgets: Lista[];

  public barChartDataDona: Array<ChartDataSets[]> = [];
  public barChartLabelsDona: Array<string[]> = [];
  public barChartLegendDona = false;
  public barChartOptionsDona = {
    scaleShowVerticalLines: true,
    responsive: true,

  };

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
      var dataDona: ChartDataSets[] = [
        {
          data: [
            80, (100-80)
          ],
          backgroundColor: datosWidget.Color_Valor1
        }
      ];
      var labelsDona = [
        'Vendidos',
        'Faltantes'
      ];
      this.barChartLabelsLinea.push(labelsLine);
      this.barChartDataLinea.push(dataLine);
      this.barChartLabelsDona.push(labelsDona);
      this.barChartDataDona.push(dataDona);
    }
    console.log(this.barChartLabelsDona);
    console.log(this.barChartDataDona);
    console.log(this.barChartLabelsLinea);
    console.log(this.barChartDataLinea);
  }

}
