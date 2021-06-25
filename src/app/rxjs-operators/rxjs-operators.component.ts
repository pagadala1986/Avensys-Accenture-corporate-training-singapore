import { Component, OnInit } from '@angular/core';

import { fromEvent, interval, of } from 'rxjs';
import { switchMap , mergeMap, delay, map, concatMap, exhaustMap} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const obs$1 = fromEvent(document, 'click');
    const obs$2 = interval(1000);
    const finalObs$ = obs$1.pipe(
      switchMap(event => obs$2)
    );
    //const subscription = finalObs$.subscribe((value) => console.log(value));
    // mergeMap Example
    console.log('mergeMap Example');
      of('Angular','ReactJs','VUEJS').pipe(
        mergeMap(el=>of(1,2).pipe(
          delay(2000),
          map(num =>el + num)
        ))
      ).subscribe(res =>{
        console.log(res)
      });

      //switchMap - returns the response of only the latest inner obsevable output
      console.log('switchMap Example');
      of('Angular','ReactJs','VUEJS').pipe(
        switchMap(el=>of(1,2).pipe(
          delay(2000),
          map(num =>el + num)
        ))
      ).subscribe(res =>{
        console.log(res)
      });

      //concatMap - works same as sitchMap operators but inner observable are not merged but they are concatinated.
      console.log("concatMap example");
      of('Angular','ReactJs','VUEJS').pipe(
        concatMap(el=>of(1,2).pipe(
          delay(2000),
          map(num =>el + num)
        ))
      ).subscribe(res=>{
        console.log(res);
      })
      //exhaustMap -
      of('Angular','ReactJs','VUEJS').pipe(
        exhaustMap(el=>of(1,2).pipe(
          delay(2000),
          map(num =>{
            return num
          })
        ))
      ).subscribe(res=>{
        debugger;
        console.log(res);
      })

let srcObservable= of(1,2,3,4)
let innerObservable= of('A','B','C','D')

srcObservable.pipe(
  exhaustMap( val => {
    console.log('Source value '+val)
    console.log('starting new observable')
    return innerObservable
  })
)
.subscribe(ret=> {
  console.log('Recd ' + ret);
})

      /**
       * Diff between MergeMap & concatMap
       * The key difference is the way the outer observable controls the inner observable.
       * From the output, mergeMap outer emit can be delayed in the sequence, but concatMap follows strict outer emit sequence.
       *
       */



  }


}
