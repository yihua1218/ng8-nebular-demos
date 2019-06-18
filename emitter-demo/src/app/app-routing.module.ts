import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { EmitterClientComponent } from './emitter-client/emitter-client.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'angular', component: AngularComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: EmitterClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
