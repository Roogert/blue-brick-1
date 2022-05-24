import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing.service';
@Component({
  selector: 'app-rebrickable-search',
  templateUrl: './rebrickable-search.component.html',
  styleUrls: ['./rebrickable-search.component.css']
})
export class RebrickableSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //   onFetchBricksets(searchInput:string){
// this.landingService.fetchBricksets(searchInput)
//   }

}
