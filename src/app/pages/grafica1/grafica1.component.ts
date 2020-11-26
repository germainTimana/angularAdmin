import { Component, OnInit } from '@angular/core';

import { MultiDataSet, Label, defaultColors, Colors, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

   public labels1: string[] = ['label 1', 'label 2', 'label 3' ];
   public data1 = [
    [100, 100, 200],
    
  ];

   // PolarArea
  public polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = false;

   
   public colorsAnalitics:Colors[] = [{
    backgroundColor: ['#3498DB','#45B39D','#58D68D','#F4D03F','#F5CBA7']
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
