import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Brickset } from './brickset.model';

@Component({
  selector: 'app-legoset',
  templateUrl: './legoset.component.html',
  styleUrls: ['./legoset.component.css'],
})
export class LegosetComponent implements OnInit {
  @Input() brickset: Brickset;
  constructor() {}

  ngOnInit(): void {}
  @Output() bricksetSelected = new EventEmitter<void>();
  onBricksetSelected() {
    this.bricksetSelected.emit();
  }
}
