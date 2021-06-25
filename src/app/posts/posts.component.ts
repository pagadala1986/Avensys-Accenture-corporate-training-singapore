import { Component, OnInit } from '@angular/core';

import { PostsService } from '../_services/posts.service';
import { first, map, mergeMap, switchMap , takeLast, takeUntil, takeWhile, tap} from 'rxjs/operators';
import { fromEvent, of, Subject } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any;
  count:any=0;
  startClick = new Subject<void>();
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: data =>{
        this.posts = data;
      },
      error: error =>{
        console.log(error);
        if(error.status===404){
          console.log('There is an error, Please try after sometime!');
        }
      }
    });

    //switchMap
    const switchMapSample = this.postService.getPosts().pipe(
      switchMap(posts => {
        return this.postService.getSinglePost(1).pipe(
         tap((singlePost) => {
            const allData = {
              singlePost
            }
            return allData;
          })
        )
      })
    )
    switchMapSample.subscribe(r=>console.log(r));

    //mergeMap
    const mergeMapSample = this.postService.getPosts().pipe(
      mergeMap(posts => {
        return this.postService.getSinglePost(1).pipe(
          map(singlePost => {
           const  allposts = {posts,singlePost };
           return allposts;
          })
        )
      })
    )
    mergeMapSample.subscribe(res=>console.log(res));

    //first() - prevents multiple clicks and allows onlye click

  const sourceClick = fromEvent(document,'click');
  sourceClick.pipe(first()).subscribe(()=>{
    console.log('Document is clicked only once');
  })
// takeWhile
  sourceClick.pipe(takeWhile(()=>this.count<3)).subscribe(()=>{
    console.log('Document allowed to click 3 times');
    this.count++;
  });
  // takelast
  const sourceTakeLast = of('Angular','ReactJs','VueJS');
  sourceTakeLast.pipe(takeLast(2)).subscribe(res=>console.log(res))

  //takeUntill
  sourceClick.pipe(takeUntil(this.startClick)).subscribe(()=>{
    console.log('clicked');
  });
}

stopClick(){
  this.startClick.next();
  this.startClick.complete();
}

  trackByFn(index){
    return index;
  }

  createPost(){
    let postObj ={
      title: 'Accenture',
      body: 'Avensys',
      userId: 1,
    }
    this.postService.createPost(postObj).subscribe(data=>{
      console.log(data);
    })
  }

}
