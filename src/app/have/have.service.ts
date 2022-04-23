import { EventEmitter, Injectable } from "@angular/core";
import { Brickset } from "../shared/legoset/brickset.model";

import { LegosetComponent } from "../shared/legoset/legoset.component";



@Injectable({
  providedIn: "root",
})
export class HaveService {
// Data sources should be IMMUTABLE!
 private mySets: Brickset[] = [
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

// Read
getBrickset(idx: number) {
  return this.mySets.slice()[idx];
}

getBricksets(){
  return this.mySets.slice()
}

// Create
saveBrickset(brickset: Brickset) {
  this.mySets.push(brickset);
  this.bricksetListChanged.emit(this.mySets.slice())
}

// Delete
removeBrickset(idx: number) {
  if (idx !== -1) {
      // We have a set at that index
      this.mySets.splice(idx, 1)
      this.bricksetListChanged.emit(this.mySets.slice())
  }
}
bricksetSelected = new EventEmitter<Brickset>();
bricksetListChanged = new EventEmitter<Brickset[]>();
}
