import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule } from '@nebular/theme';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbChatModule, NbListModule, NbCardModule, NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmitterClientComponent } from './emitter-client/emitter-client.component';
import { AngularComponent } from './angular/angular.component';

// Services
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    EmitterClientComponent,
    AngularComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbCardModule,
    NbListModule,
    NbChatModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
