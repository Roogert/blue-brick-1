import { Component, Injectable, OnInit } from '@angular/core';
import { HaveService } from 'src/app/have/have.service';
import { Brickset } from 'src/app/shared/legoset/brickset.model';

import { WantService } from '../want.service';

@Component({
  selector: 'app-lego-results',
  templateUrl: './lego-results.component.html',
  styleUrls: ['./lego-results.component.css']
})

@Injectable({
  providedIn: "root",
})

export class LegoResultsComponent implements OnInit {
  allSets: Brickset[] = [];

  constructor(
    private wantService: WantService,
    private haveService: HaveService
    ) { }

  ngOnInit(): void {
    this.allSets = this.wantService.getBricksets();
  }

onSaveBrickset(brickset: Brickset){
  return this.haveService.saveBrickset(brickset);
}

}
