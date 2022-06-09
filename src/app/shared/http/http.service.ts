import { AuthService } from "../auth/auth.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
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
    // private authService: AuthService,
    private landingService: LandingService
  ) {}

  // *METHOD* - Save sets to Firebase DB
  saveBricksetsToFirebase() {
    const bricksets = this.landingService.getBricksets();

    this.http.put(this.firebaseRootURL, bricksets).subscribe((res) => {
      console.log("Firebase DB Response:", res);
    });
  }


// ! NOTE: WE WILL NOT NEED THIS CODE SHORTLY!!!
// fetchBricksetsFromFirebase() {
//   return this.authService.currentUser.pipe(
//     take(1),
//     exhaustMap((user) => {
//       console.log(user);
//       return this.http
//         .get(this.firebaseRootURL, {
//           params: new HttpParams().set('auth', user.token),
//         })
//       .pipe(
//         tap((bricksets: Brickset[]) =>{
//           this.landingService.setBricksets(bricksets);
//         })
//       );
//     })
//   );
// }


// *METHOD* - Fetch sets from Firebase DB
fetchBricksetsFromFirebase() {
  return this.http.get<Brickset[]>(this.firebaseRootURL, {}).pipe(
    tap((bricksets) => {
      this.landingService.setBricksets(bricksets);
    })
  );
}

}
