import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrls: ['./set-details.component.css']
})
export class SetDetailsComponent implements OnInit {
@Input() brickset
  constructor() { }

  ngOnInit(): void {
  }

}
