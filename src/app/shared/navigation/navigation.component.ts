import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingComponent } from 'src/app/landing/landing.component';

import { LandingService } from 'src/app/landing/landing.service';
import { HTTPService } from '../http/http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})



export class NavigationComponent implements OnInit {
  collapsed: boolean = true;
  show: boolean = false;

  constructor(
              private landingService: LandingService,
              private router: Router,
              private httpService: HTTPService) { }


  ngOnInit(): void {
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

}
