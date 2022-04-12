import { Component, OnInit } from '@angular/core';
import { Brickset } from '../shared/legoset/brickset.model';

@Component({
  selector: 'app-have',
  templateUrl: './have.component.html',
  styleUrls: ['./have.component.css']
})
export class HaveComponent implements OnInit {
selectedBrickset: Brickset;
  constructor() { }

  ngOnInit(): void {
  }

}
