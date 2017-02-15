import { Injectable } from '@angular/core';
import { PRODUCTDATA } from './data';
import { IProduct } from './product';

@Injectable()

export class DataService {
	getData():IProduct[] {
		return PRODUCTDATA;
	}

	getDataByID(productid:number) { // In reality should be replaced by HTTP request to an API
		return PRODUCTDATA.find(r => r.id == productid); 
	}
}