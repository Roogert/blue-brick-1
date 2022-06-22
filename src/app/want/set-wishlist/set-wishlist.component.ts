import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LandingService } from 'src/app/landing/landing.service';
import { Brickset } from 'src/app/shared/legoset/brickset.model';
import { WantService } from '../want.service';

@Component({
  selector: 'app-set-wishlist',
  templateUrl: './set-wishlist.component.html',
  styleUrls: ['./set-wishlist.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class SetWishlistComponent implements OnInit {

  @Input() brickset: Brickset;
  mySets: Brickset[];
  idx: number;
  private bricksetListSub: Subscription;

  constructor(
    private wantService: WantService,
    private landingService: LandingService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  //   onNewBrickset() {
  //     this.router.navigate(['new'], { relativeTo: this.route });
  // }

  ngOnInit(): void {
    // Use the Service to set local "mySets" array to Service/Global "mySets" array
    this.mySets = this.wantService.getBricksets();
    // Listen for changes on the global "mySets" array and update the local version

    // Update view
    this.bricksetListSub = this.wantService.bricksetListChanged.subscribe(
      (bricksets: Brickset[]) => {
        // overriding the mySets value to the update array of brickets
        this.mySets = bricksets
        console.log(this.mySets);
      }
    );
  }

  onRemoveBrickset(idx: number) {
    console.log("On Remove Brickset from set-wishlist.component.ts file!")
    this.wantService.removeBrickset(idx);
  }

  ngOnDestroy(): void {
    this.bricksetListSub.unsubscribe();
  }

}
