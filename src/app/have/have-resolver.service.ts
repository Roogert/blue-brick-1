import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Brickset } from "../shared/legoset/brickset.model";
import { HTTPService } from "../shared/http/http.service";
import { HaveService } from "./have.service";

@Injectable({
  providedIn: "root",
})
export class HaveResolverService implements Resolve<Brickset[]> {
  constructor(
    private haveService: HaveService,
    private httpService: HTTPService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const bricksets = this.haveService.getBricksets();

    if (bricksets.length === 0) {
      return this.httpService.fetchBricksetsFromFirebase();
    } else {
      return bricksets;
    }
  }
}
