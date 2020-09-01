import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor() {
    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('Subs:', valor),
    //   error => console.warn('Error: ', error),
    //   () => console.log('Obs terminado')

    // );

    // este observable siempre esta emitiendo valores
    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }

  ngOnDestroy(): void {
    // terminamos la subscription al intervalo cuando el usuario sale del componente
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    // Los operadores se ejecutan en orden, el orden de ejecucion es importante
    return interval(100)
                      .pipe(
                        // take(10),
                        map( valor => valor + 1),
                        filter( valor => (valor % 2 === 0 ) ? true : false)
                      );
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000);

    });
  }
}
