import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes , RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';

const routes: Routes = [
  {
    path: 'component',
    component: ComponentComponent,

  }
];

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],

  exports:
  [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
