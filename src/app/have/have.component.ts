import { Component, OnInit } from '@angular/core';
import { Brickset } from '../shared/legoset/brickset.model';

import{ HaveService} from '../have/have.service';

@Component({
  selector: 'app-have',
  templateUrl: './have.component.html',
  styleUrls: ['./have.component.css']
})



export class HaveComponent implements OnInit {
selectedBrickset: Brickset;
  constructor(private haveService: HaveService) { }

  ngOnInit(): void {
  // Subscribe to the haveService to get all the global updates inside this component
  this.haveService.bricksetSelected.subscribe((brickset: Brickset) => {
    this.selectedBrickset = brickset;
  });
}
}
