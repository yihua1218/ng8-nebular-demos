import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule } from '@nebular/theme';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import {
  NbChatModule, NbListModule, NbCardModule,
  NbSidebarModule, NbLayoutModule, NbButtonModule,
  NbIconModule, NbMenuModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmitterClientComponent } from './emitter-client/emitter-client.component';
import { AngularComponent } from './angular/angular.component';

// Services
import { ApiService } from './api.service';
import { PresenceListComponent } from './presence-list/presence-list.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    EmitterClientComponent,
    AngularComponent,
    PresenceListComponent,
    SettingsComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbLayoutModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbChatModule,
    NbEvaIconsModule,
    NbIconModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
