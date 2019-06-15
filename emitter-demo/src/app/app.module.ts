import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmitterClientComponent } from './emitter-client/emitter-client.component';
import { AngularComponent } from './angular/angular.component';

@NgModule({
  declarations: [
    AppComponent,
    EmitterClientComponent,
    AngularComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbThemeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
