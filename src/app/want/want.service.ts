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


// export class WantService {
//   allSets: Brickset[]=[ ];

//   constructor(private http: HttpClient){ }

// bricksetListChanged = new Subject<Brickset[]>();

//    fetchBricksets(searchInput: string){
//     const setInfo = "https://rebrickable.com/api/v3/lego/sets/?search=" + searchInput +"&key=30dde2f73200e1b1c5406c6016f65bd2";
//     this.http.get<Brickset>(setInfo).subscribe((response) => {
//     this.allSets = [];
//       console.log('response', response);
//     this.saveBricksets(response);
//     });
//   }

//   getBricksets() {
//     return this.allSets.slice();
//   }

//   saveBricksets(bricksets){
//     console.log(bricksets);
//   //map over all set results
//     bricksets.results.map((brickset) => {
//     const { name, year, num_parts, set_img_url, set_num} =brickset;
//     //for each set result, create new set
//     const newBrickset = new Brickset(
//       name, year, num_parts, set_img_url, set_num
//     );
//    //add to allSets array
//     this.allSets.push(newBrickset)
//   });
//   this.bricksetListChanged.next(this.allSets.slice());
// }



// }
