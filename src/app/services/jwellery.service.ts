import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwelleryService {

  url_jwellery = 'http://localhost:3000/jwellery/';
  constructor(private _http: HttpClient) { }

  getAllJwellery() {
    return this._http.get(this.url_jwellery);
  }

  getJwellery(id) {
    return this._http.get(this.url_jwellery + id);
  }




}
