import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HaveComponent } from './have/have.component';
import { WantComponent } from './want/want.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { LegosetComponent } from './shared/legoset/legoset.component';
import { SetListComponent } from './have/set-list/set-list.component';
import { SetDetailsComponent } from './have/set-details/set-details.component';
import { LandingComponent } from './landing/landing.component';

import { DropdownDirective } from './shared/directives/dropdown.directive';

// import { Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, RouterState } from '@angular/router';
import { HaveEditorComponent } from './have/have-editor/have-editor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RebrickableSearchComponent } from './landing/rebrickable-search/rebrickable-search.component';
import { RebrickableResultsComponent } from './landing/rebrickable-results/rebrickable-results.component';
import { AuthComponent } from './shared/auth/auth.component';
import { AuthInterceptorService } from './shared/auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SetWishlistComponent } from './want/set-wishlist/set-wishlist.component';



@NgModule({
  declarations: [
    AppComponent,
    HaveComponent,
    WantComponent,
    NavigationComponent,
    LegosetComponent,
    SetListComponent,
    SetDetailsComponent,
    DropdownDirective,
    HaveEditorComponent,
    LandingComponent,
    RebrickableSearchComponent,
    RebrickableResultsComponent,
    AuthComponent,
    AlertComponent,
    FooterComponent,
    SetWishlistComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
