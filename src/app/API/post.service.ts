import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../Model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }

  getPost()
  {
    return this.http.get<Post[]>("http://127.0.0.1:8000/test/api/posts");
  }
}
