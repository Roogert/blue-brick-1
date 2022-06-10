import { Component, OnInit, Input, Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Brickset } from 'src/app/shared/legoset/brickset.model';
import { HaveService } from '../have.service';
import { LandingService } from 'src/app/landing/landing.service';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class SetListComponent implements OnInit, OnDestroy {
  @Input() brickset: Brickset;
  // @Output()currentSelectedBrickset= new EventEmitter<Brickset>();
  mySets: Brickset[];
  idx: number;
  private bricksetListSub: Subscription;

  constructor(
    private haveService: HaveService,
    private landingService: LandingService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  //   onNewBrickset() {
  //     this.router.navigate(['new'], { relativeTo: this.route });
  // }

  ngOnInit(): void {
    // Use the Service to set local "mySets" array to Service/Global "mySets" array
    this.mySets = this.haveService.getBricksets();
    // Listen for changes on the global "mySets" array and update the local version

    // Update view
    this.bricksetListSub = this.haveService.bricksetListChanged.subscribe(
      (bricksets: Brickset[]) => {

        // adding onto the array
        // this.mySets.push(...bricksets);

        // overriding the mySets value to the update array of brickets
        this.mySets = bricksets
        console.log(this.mySets);
      }
    );

    // this.bricksetListSub = this.haveService.bricksetListChanged.subscribe(
    //   (bricksets: Brickset[]) => {
    //     this.mySets.push(...bricksets);
    //     console.log(this.mySets);
    //   }
    // );
  }

  onRemoveBrickset(idx: number) {
    console.log("On Remove Brickset from set-list.component.ts file!")
    this.haveService.removeBrickset(idx);
  }

  ngOnDestroy(): void {
    this.bricksetListSub.unsubscribe();
  }
}
