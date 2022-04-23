import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brickset } from 'src/app/shared/legoset/brickset.model';
import { HaveService } from '../have.service';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css']
})

@Injectable({
  providedIn: "root",
})

export class SetListComponent implements OnInit {
@Input() brickset: Brickset;
  // @Output()currentSelectedBrickset= new EventEmitter<Brickset>();
mySets: Brickset [];
idx: number;

  constructor(private haveService: HaveService,
  private router: Router,
  private route: ActivatedRoute
  ) { }

  onNewBrickset() {
    this.router.navigate(['new'], { relativeTo: this.route });
}

  ngOnInit(): void {
  // Use the Service to set local "myBooks" array to Service/Global "myBooks" array
  this.mySets = this.haveService.getBricksets();
  // Listen for changes on the global "myBooks" array and update the local version
  this.haveService.bricksetListChanged.subscribe((bricksets: Brickset[]) => {
    this.mySets = bricksets;
  });
}

onRemoveBrickset(idx: number) {
  this.haveService.removeBrickset(idx);
}
}


  // handleBricksetSelected(brickset: Brickset){
  //   this.currentSelectedBrickset.emit(brickset);
  // }

