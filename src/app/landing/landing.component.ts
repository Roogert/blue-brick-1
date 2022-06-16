import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Brickset } from '../shared/legoset/brickset.model';
import { HaveService } from '../have/have.service';
import { WantService } from '../want/want.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit, OnDestroy {
  private selectedBricksetInvSub: Subscription;
  private selectedBricksetWishSub: Subscription;
  alert: string;
  brickset = Brickset;

  constructor(private haveService: HaveService,
              private wantService: WantService) {}

  ngOnInit(): void {
    this.selectedBricksetInvSub = this.haveService.bricksetSelected.subscribe(
      (brickset) => {
        console.log('TEST FROM have service - brickets ' + brickset);
        this.alert = `Successfully added set# ${brickset.set_num}: The ${brickset.name} from ${brickset.year} to your Inventory.`;
        setTimeout(() => this.handleCloseModal(), 4000);
      }
    );

    this.selectedBricksetWishSub = this.wantService.bricksetSelected.subscribe(
      (brickset) => {
        console.log('TEST FROM want service - brickets ' + brickset);
        this.alert = `Successfully added set# ${brickset.set_num}: The ${brickset.name} from ${brickset.year} to your Wishlist!!!`;
        setTimeout(() => this.handleCloseModal(), 4000);
      }
    );
  }




  handleCloseModal() {
    this.alert = null;
  }

  ngOnDestroy(): void {
    this.selectedBricksetInvSub.unsubscribe();
    this.selectedBricksetWishSub.unsubscribe();
  }
}
