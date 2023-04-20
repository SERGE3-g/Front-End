import { Component, OnInit , OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes: any;
  compteurSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const compteur = interval(1000).pipe(
      filter((value: number) => value % 2 === 0),
      map((value: number) => value % 2 === 0 ?
        `${value} est pair` :
        `${value} est impair`
      )
    );

    this.compteurSubscription = compteur.subscribe({
      next: (v: any) => this.secondes = v,
      error: (e: any) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  ngOnDestroy() {
    this.compteurSubscription.unsubscribe();
  }

}
