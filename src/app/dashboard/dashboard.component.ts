import { Component , OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { JwelleryClass } from '../models/jwellery-class';
import {  JwelleryService } from '../services/jwellery.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  arr_jwellery: JwelleryClass[];
  i = 0;
  constructor(private _data: JwelleryService) {}

  ngOnInit() {

    this._data.getAllJwellery().subscribe(
      (res: JwelleryClass[]) => {
        this.arr_jwellery = res;
      },
      function(err) {
        alert('alert: ' + err);
      },
      function() {
        alert('success');
      }
    );

  }


}
