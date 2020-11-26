import { Component, Input, OnInit } from '@angular/core';
import { Colors, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafdona',
  templateUrl: './grafdona.component.html',
  styles: [
  ]
})
export class GrafdonaComponent implements OnInit {
  @Input() title = "Grafica - Y";

  // Doughnut
  @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 200],
    
  ];
  public colors:Colors[] = [{
    backgroundColor: ['#3498DB','#45B39D','#58D68D']
  }];

  
  
  constructor() { }

  ngOnInit(): void {
  }

}
