import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {
  public Title: string;
  public TitleSubs$: Subscription;

  constructor(private router: Router) {
    this.TitleSubs$ = this.getArgumentosRuta()
                          .subscribe( ({Title}) => {
                            this.Title = Title;
                            document.title = `AdminPro - ${ Title }`;
                          });
   }
  ngOnDestroy(): void {
    this.TitleSubs$.unsubscribe();
  }

  getArgumentosRuta() {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
        );
  }

}
