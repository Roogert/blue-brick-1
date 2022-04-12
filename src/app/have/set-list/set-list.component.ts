import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Brickset } from 'src/app/shared/legoset/brickset.model';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css']
})
export class SetListComponent implements OnInit {
@Input() brickset: Brickset;
  @Output()currentSelectedBrickset= new EventEmitter<Brickset>();
  mySets: Brickset[] = [
 new Brickset(
   'Pirates of Barracuda Bay',
    21322,
    'Pirates',
    'https://live.staticflickr.com/65535/49698377257_be3f773feb_b.jpg'
), new Brickset(
  'Razor Crest',
   75292,
   'Star Wars',
   'https://whatsondisneyplus.com/wp-content/uploads/2020/09/8119ul9BR5L._AC_SL1500_-959x800.jpg'
), new Brickset(
  'Winnie the Pooh',
   10254,
   'Disney',
   'https://live.staticflickr.com/65535/51005074838_b0164a7303_b.jpg'
)
];
  constructor() { }

  ngOnInit(): void {
  }

  handleBricksetSelected(brickset: Brickset){
    this.currentSelectedBrickset.emit(brickset);
  }
}
