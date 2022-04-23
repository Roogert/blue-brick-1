import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HaveComponent } from './have/have.component';
import { WantComponent } from './want/want.component';
import { LegoSearchComponent } from './want/lego-search/lego-search.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { LegosetComponent } from './shared/legoset/legoset.component';
import { SetListComponent } from './have/set-list/set-list.component';
import { SetDetailsComponent } from './have/set-details/set-details.component';
import { LegoResultsComponent } from './want/lego-results/lego-results.component';

import { DropdownDirective } from './shared/directives/dropdown.directive';

// import { Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, RouterState } from '@angular/router';
import { HaveHomeComponent } from './have/have-home/have-home.component';
import { HaveEditorComponent } from './have/have-editor/have-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HaveComponent,
    WantComponent,
    LegoSearchComponent,
    NavigationComponent,
    LegosetComponent,
    SetListComponent,
    SetDetailsComponent,
    LegoResultsComponent,
    DropdownDirective,
    HaveHomeComponent,
    HaveEditorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
