import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnDestroy {
  promise: Promise<string>;
  observable: Observable<number>;
  private subscription: any = null;
  observableData: number;

  constructor() {
    //this.promise = this.getPromise();
    this.observable = this.getObservable();
    this.subscribeObservable();

  }

  getObservable() {
    return Observable
        .interval(1000)
        .take(10)
        .map((v) => v * v);
  }

  // AsyncPipe subscribes to the observable automatically
  subscribeObservable() {
    this.subscription = this.getObservable()
        .subscribe((v) => this.observableData = v);
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
  }

  // AsyncPipe unsubscribes from the observable automatically
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
