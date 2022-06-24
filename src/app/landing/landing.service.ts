import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Brickset } from "../shared/legoset/brickset.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LandingService {
  allSets: Brickset[]=[ ];

  constructor(private http: HttpClient){ }

bricksetListChanged = new Subject<Brickset[]>();

   fetchBricksets(searchInput: string){
    const setInfo = "https://rebrickable.com/api/v3/lego/sets/?search=" + searchInput + environment.API_REBRICKABLE_TOKEN;
    this.http.get<Brickset[]>(setInfo).subscribe((response) => {
    this.allSets = [];
      const brickFilter = response['results'].filter(set => set.num_parts > 0);
      console.log('response', brickFilter);
    this.saveBricksets(brickFilter);
    });
  }

  getBricksets() {
    return this.allSets.slice();
  }

  saveBricksets(bricksets){
    console.log(bricksets);
  //map over all set results
    bricksets.forEach((brickset) => {
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
  this.allSets = bricksets || [];
  this.bricksetListChanged.next(this.allSets.slice());
}

bricksetSelected = new Subject<Brickset>();
// bricksetListChanged = new Subject<Brickset[]>();

}
