import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { FrontComponent } from './front/front.component';
import { ContactComponent } from './contact/contact.component';
import { SingleComponent } from './single/single.component';
import { DataService } from './shared/data.service';

@NgModule({
  imports:      [ BrowserModule,
    FormsModule,
  	RouterModule.forRoot([
 	{ path:'', component:FrontComponent },
 	{ path:'contact', component:ContactComponent },
 	{ path:'single/:id', component:SingleComponent },
 	{ path: '', redirectTo: '', pathMatch: 'full' },
 	{ path: '**', redirectTo: '', pathMatch: 'full' }
  	])
  ],
  declarations: [ 
  AppComponent, 
  SiteHeaderComponent, 
  SiteFooterComponent, 
  FrontComponent,
  ContactComponent,
  SingleComponent
  ],
  providers: [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
