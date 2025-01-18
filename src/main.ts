//Import Modules

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { DisplayComponent } from './app/display/display.component';


//set paths
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'dashboard/:id', component: DisplayComponent }
    ])
  ]
});
