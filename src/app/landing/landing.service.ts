import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Brickset } from "../shared/legoset/brickset.model";


@Injectable({
  providedIn: "root",
})
export class LandingService {
  allSets: Brickset[]=[ ];

  constructor(private http: HttpClient){ }

bricksetListChanged = new Subject<Brickset[]>();

   fetchBricksets(searchInput: string){
    const setInfo = "https://rebrickable.com/api/v3/lego/sets/?search=" + searchInput +"&key=30dde2f73200e1b1c5406c6016f65bd2";
    this.http.get<Brickset>(setInfo).subscribe((response) => {
    this.allSets = [];
      console.log('response', response);
    this.saveBricksets(response);
    });
  }

  getBricksets() {
    return this.allSets.slice();
  }

  saveBricksets(bricksets){
    console.log(bricksets);
  //map over all set results
    bricksets.results.map((brickset) => {
    const { name, year, num_parts, set_img_url, set_num} =brickset;
    //for each set result, create new set
    const newBrickset = new Brickset(
      name, year, num_parts, set_img_url, set_num
    );
   //add to allSets array
    this.allSets.push(newBrickset)
  });
  this.bricksetListChanged.next(this.allSets.slice());
}

setBricksets(bricksets: Brickset[] | []) {
  console.log('%c  sets: ', 'color: red;', bricksets);

  this.allSets = bricksets || [];
  this.bricksetListChanged.next(this.allSets.slice());
}

}
