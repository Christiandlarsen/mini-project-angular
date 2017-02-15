import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from '../shared/product';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'single',
  templateUrl: './app/single/single.component.html'
})
export class SingleComponent implements OnInit {
	productid:number;
	product:IProduct;

	constructor(private _route: ActivatedRoute, 
				private _router: Router,
				private _demoDataService: DataService) {

				}

	ngOnInit() {
		this.productid = +this._route.snapshot.params['id'] // + converts the parameter (string) into a number
		this.product = this._demoDataService.getDataByID(this.productid);
	}
}
