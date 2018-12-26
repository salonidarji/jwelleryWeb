import { Component, OnInit } from '@angular/core';
import { JwelleryService } from '../services/jwellery.service';
import { JwelleryClass } from '../models/jwellery-class';
import { CategoryService } from '../services/category.service';
import { CategoryClass } from '../models/category-class';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  arr_category: JwelleryClass[];
  cat_arr: CategoryClass[];
  constructor(private _data: CategoryService) { }

  ngOnInit() {
    this._data.getAllCategory().subscribe(
      (_data: any) => {
          this.cat_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log(' All category done');
      }
    );
  }

  onClick($event) {
    this._data.getJwelleryByCategory(this.cat_arr[$event].pk_category_id).subscribe(
      (_data: any) => {
          this.arr_category = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log(' single category done');
      }
    );
  }
}
