import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NavigationService } from './core/navigation.service';
import { take, takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  showHeader: boolean = true;
  private unsubscribe$ = new Subject();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {


    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let activeRoot = this.activatedRoute.root;
        switch (this.activatedRoute.firstChild?.snapshot.url.toString()) {
          case 'login':
            this.showHeader = false;
            break;
          default:
            this.showHeader = true;
            break;
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
