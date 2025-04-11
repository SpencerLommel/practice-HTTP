import { inject, Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);
  url = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<Post[]> {
    const params = new HttpParams().set('_limit', 5);
    return this.http.get<Post[]>(this.url, { params });
  }

  //retrieves posts by id
  getPostById(id: number): Observable<Post[]> {
    const params = new HttpParams().set('id', id);
    return this.http.get<Post[]>(this.url, { params });
    // return this.http.get<Post>(`${this.url}/${id}`);
  }

  addPost() {
    const post = {
      id: 101,
      userID: 1000,
      title: 'abcde',
      body: 'eieifwjwfowh',
    };
    return this.http.post(this.url, post);
  }
}

//retrieves posts by combination of userId and id just for demo purpose
// getPostByIds(userId:number, id: number): Observable<Post[]>{
//   const params = new HttpParams().set('userId', userId).set('id', id);
//   return this.http.get<Post[]>(this.url, {params});
// }
