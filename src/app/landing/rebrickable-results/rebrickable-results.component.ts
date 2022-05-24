import { Component, Injectable, OnInit } from '@angular/core';
import { HaveService } from 'src/app/have/have.service';
import { Brickset } from 'src/app/shared/legoset/brickset.model';

import { LandingService } from '../landing.service';

@Component({
  selector: 'app-rebrickable-results',
  templateUrl: './rebrickable-results.component.html',
  styleUrls: ['./rebrickable-results.component.css']
})

@Injectable({
  providedIn: "root",
})

export class RebrickableResultsComponent implements OnInit {
  allSets: Brickset[] = [];

  constructor(private landingService: LandingService,
    private haveService: HaveService) { }

  ngOnInit(): void {
    this.allSets = this.landingService.getBricksets();
    this.landingService.bricksetListChanged.subscribe(updatedBrickset=>{
      console.log( updatedBrickset);
      this.allSets = updatedBrickset;
    });
  }

  onSaveBrickset(brickset: Brickset){
    return this.haveService.saveBrickset(brickset);
  }

}
