import { Injectable } from "@angular/core";
import { Brickset } from "../shared/legoset/brickset.model";
import { Subject } from "rxjs";



@Injectable({
  providedIn: "root",
})
export class HaveService {
   mySets: Brickset[]=[];


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
  this.bricksetSelected.next(brickset);
  this.bricksetListChanged.next(this.mySets.slice());
}

// Delete
removeBrickset(idx: number) {
  if (idx !== -1) {
      // We have a set at that index
      this.bricksetSelected.next(this.mySets[idx]);
      this.mySets.splice(idx, 1)
      // 1. update the view
      this.bricksetListChanged.next(this.mySets.slice());
  }
}

addBrickset(brickset: Brickset) {
  this.mySets.push(brickset);
  this.bricksetListChanged.next(this.mySets.slice());
}

updateBrickset(idx: number, updateBrickset: Brickset) {
  // this.mySets[idx] = updateBrickset;
  this.mySets[idx].name = updateBrickset.name;
  this.bricksetListChanged.next(this.mySets.slice());
}

bricksetSelected = new Subject<Brickset>();
bricksetListChanged = new Subject<Brickset[]>();
}
