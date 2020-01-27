import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { environment} from '@/src/environments/environment';
import {Observable} from 'rxjs';
import {Post} from '@/src/app/models/post';
import {Comment} from '@/src/app/models/comment';

const env = environment ? environment.development : '';
const route = env ? env.api : '';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getPost(): Observable<HttpResponse<Post[]>> {
    return this.http.get<Post[]>(`${route}/posts`, {observe: 'response'});
  }

  getComment(id: number): Observable<HttpResponse<Comment[]>> {
    return this.http.get<Comment[]>(`${route}/comments?postId=${id}`, {observe: 'response'});
  }
}
