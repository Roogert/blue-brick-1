import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingComponent } from 'src/app/landing/landing.component';

import { LandingService } from 'src/app/landing/landing.service';
import { AuthService } from '../auth/auth.service';
import { HTTPService } from '../http/http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})



export class NavigationComponent implements OnInit {
  collapsed: boolean = true;
  show: boolean = false;
  isAuthenticated = false;

  constructor(
              private landingService: LandingService,
              private router: Router,
              private httpService: HTTPService,
              private authService: AuthService) { }


  ngOnInit(): void {
    this.authService.currentUser.subscribe((user) => {
      // !! - Bang Bang, You're a Boolean.
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.authService.currentUser.unsubscribe();
}

  onFetchBricksets(searchInput:string){
    this.router.navigate(
      ['landing']
    )
    this.landingService.fetchBricksets(searchInput)
      }

  onSaveData() {
    this.httpService.saveBricksetsToFirebase();
  }

  onFetchData() {
    this.httpService.fetchBricksetsFromFirebase().subscribe();
  }

  onSignOut() {
    this.authService.signOut();
}

}
