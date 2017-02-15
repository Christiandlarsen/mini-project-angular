import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  			<site-header></site-header>
  			<router-outlet></router-outlet>
  			<site-footer></site-footer>`,
})
export class AppComponent  {
	constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            document.body.scrollTop = 0;
        });
    }
}
