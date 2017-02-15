import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/product';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'front',
  templateUrl: './app/front/front.component.html'
})
export class FrontComponent implements OnInit {
	products:IProduct[];

	constructor(private dataService: DataService) {

	}

	ngOnInit(){
		this.products = this.dataService.getData();
	}
}
