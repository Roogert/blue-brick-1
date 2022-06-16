import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Brickset } from "../shared/legoset/brickset.model";

import { LegosetComponent } from "../shared/legoset/legoset.component";

@Injectable({
  providedIn: "root",
})

export class WantService {
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
 this.bricksetListChanged.next(this.mySets.slice())
}

// Delete
removeBrickset(idx: number) {
 if (idx !== -1) {
     // We have a set at that index
     this.mySets.splice(idx, 1)
     this.bricksetListChanged.next(this.mySets.slice())
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


