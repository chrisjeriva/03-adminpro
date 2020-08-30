import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1 = [
    [350, 450, 100]
  ];
  public colors1: any[] = [
    {backgroundColor: ['#F1F1F1', '#000000', '#F02059']}
  ];

  public labels2: string[] = ['AppStore', 'AppleStore', 'Others'];
  public data2 = [
    [650, 350, 200]
  ];

  public labels3: string[] = ['Store 1', 'Store 2', 'Store 3'];
  public data3 = [
    [90, 50, 100]
  ];

  public labels4: string[] = ['Sales Mail', 'Sales Mail 1', 'Mail Corp'];
  public data4 = [
    [123, 350, 90]
  ];
}
