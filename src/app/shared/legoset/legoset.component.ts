import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HaveService } from 'src/app/have/have.service';
import { Brickset } from './brickset.model';

@Component({
  selector: 'app-legoset',
  templateUrl: './legoset.component.html',
  styleUrls: ['./legoset.component.css'],
})
export class LegosetComponent implements OnInit {
  @Input() brickset: Brickset;
   @Input() idx: number;

  routerLinkActive="active"

  constructor(private haveService: HaveService) {}


  ngOnInit(): void {}
  @Output() bricksetSelected = new EventEmitter<void>();
//   onBricksetSelected() {
// // Tell App Component that someone clicked on a set
//     this.haveService.bricksetSelected.emit(this.brickset);
//   }
}
