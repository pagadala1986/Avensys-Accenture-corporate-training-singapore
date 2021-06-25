import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts():Observable<any[]>{
    return this.http.get<any[]>(environment.apiHost+'/posts');
  }

  getSinglePost(pid):Observable<any[]>{
    return this.http.get<any[]>(environment.apiHost+'/posts/'+pid)
  }

  createPost(payload):Observable<any>{
    return this.http.post(environment.apiHost+'/posts',payload);
  }

  updatePost(payload):Observable<any>{
    return this.http.put(environment.apiHost+'/posts',payload);
  }
}
