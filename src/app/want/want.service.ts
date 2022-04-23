import { EventEmitter, Injectable } from "@angular/core";
import { Brickset } from "../shared/legoset/brickset.model";

import { LegosetComponent } from "../shared/legoset/legoset.component";

@Injectable({
  providedIn: "root",
})
export class WantService {
bricksetListChanged = new EventEmitter<Brickset[]>();

private allSets: Brickset[]=[
     new Brickset(
       'Palace Cinema',
       10232,
       'Modular',
       'https://i.ebayimg.com/00/s/MTM2NFgxNjAw/z/~RcAAOSwgA5hx5H5/$_59.JPG'
     ),
     new Brickset(
       'N-1 Starfighter',
       75325,
       'Star Wars',
       'https://jaysbrickblog.com/wp-content/uploads/2022/02/75325-The-Mandalorians-N-1-Starfighter-Box-Back-1400x1006.jpg'
     )
   ];

getBricksets() {
  return this.allSets.slice();
}

}
