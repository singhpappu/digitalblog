import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

import { Category, category } from './blog';
export class Blogs{};
@Injectable()
export class BlogService {
  private url = `${environment.apiUrl}`;
  constructor(
    private http: Http,
  ) { }

  getAllBlog():Promise <Blogs[]> {
    return this.http.get(`${this.url}blog/get`)
      .toPromise()
      .then(response => response.json() as Blogs[])
      .catch();
  }
  
  getBlogBySlug(slug):Promise <Blogs[]> {
    return this.http.get(`${this.url}blog/story/`+`${slug}`)
      .toPromise()
      .then(response => response.json() as Blogs[])
      .catch();
  }

  getCategory():Promise<Category[]> {
    return Promise.resolve(category)
  }
}
