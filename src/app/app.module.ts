import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { BonusComponent } from './bonus/bonus.component';
import { ReadmeComponent } from './readme/readme.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'task', component: TaskComponent },
  { path: 'bonus', component: BonusComponent },
  //{ path: 'album-detail/:id', component: AlbumsDetailComponent },
  { path: 'readme', component: ReadmeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    BonusComponent,
    ReadmeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
