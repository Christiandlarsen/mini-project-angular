import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Contactform {
	contactname: string;
	contactemail: string;
	contactmessage: string;
}

@Component({
  selector: 'contact',
  templateUrl: './app/contact/contact.component.html'
})
export class ContactComponent  {
	model:Contactform = new Contactform();
	hasBeenSubmitted: boolean;

	ngOnInit() {
		this.hasBeenSubmitted = false;
	}

	register(form:NgForm, event:Event) {
		// Submission stuff here

		//When successful:
		event.preventDefault(); //prevents HTML from putting input parameters in the URL
		this.hasBeenSubmitted = true;
	}
}
