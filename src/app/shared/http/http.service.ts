import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {tap} from "rxjs/operators";
import { LandingService } from "src/app/landing/landing.service";
import { Brickset } from "../legoset/brickset.model";

@Injectable({
  providedIn: "root",
})
export class HTTPService {
  // *VARIABLES*
  firebaseRootURL =
  "https://kelleybluebrick-default-rtdb.firebaseio.com/brickset.json";

  // *INJECTIONS*
  constructor(
    private http: HttpClient,
    private landingService: LandingService
  ) {}

  // *METHOD* - Save sets to Firebase DB
  saveBricksetsToFirebase() {
    const bricksets = this.landingService.getBricksets();

    this.http.put(this.firebaseRootURL, bricksets).subscribe((res) => {
      console.log("Firebase DB Response:", res);
    });
  }

// *METHOD* - Fetch sets from Firebase DB
fetchBricksetsFromFirebase() {
  return this.http.get(this.firebaseRootURL, {}).pipe(
      tap((bricksets: Brickset[]) =>{
      this.landingService.setBricksets(bricksets);
      })
  );
}
//     .subscribe((res: Brickset[] | []) => {
//       this.landingService.setBricksets(res);
//     });
// }

}
