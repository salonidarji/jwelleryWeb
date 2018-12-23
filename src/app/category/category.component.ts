import { Component, OnInit } from '@angular/core';
import { JwelleryService } from '../services/jwellery.service';
import { JwelleryClass } from '../models/jwellery-class';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  arr_category: JwelleryClass[];
  catId = 2;
  constructor(private _data: CategoryService) { }

  ngOnInit() {
    this._data.getJwelleryByCategory(this.catId).subscribe(
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

  onClick(id) {
    this.catId = id;
    this.ngOnInit();
  }

}
