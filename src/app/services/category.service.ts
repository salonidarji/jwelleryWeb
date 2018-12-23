import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url_category = 'http://localhost:3000/category/';

  constructor(private _http: HttpClient) { }

  getJwelleryByCategory(id) {
    return this._http.get(this.url_category + id);
  }
}
