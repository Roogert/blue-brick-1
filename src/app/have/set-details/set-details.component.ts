import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Brickset } from 'src/app/shared/legoset/brickset.model';
import { HaveService } from '../have.service';

@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrls: ['./set-details.component.css']
})
export class SetDetailsComponent implements OnInit {
 brickset: Brickset;
 idx: number;

  constructor(
    private haveService: HaveService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

    onEditBrickset() {
      this.router.navigate(['../', this.idx, 'edit'], { relativeTo: this.route });
    }

    onRemoveBrickset(idx: number) {
      this.haveService.removeBrickset(idx);
    }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.brickset = this.haveService.getBrickset(this.idx);
      });
  }

}
