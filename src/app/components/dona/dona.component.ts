import { Component, Input } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  @Input() Title = 'Sin Título';

  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  @Input('colors') colors: Color[] = [
    {backgroundColor: ['#68576E', '#009FEE', '#F02059']}
  ];
}
