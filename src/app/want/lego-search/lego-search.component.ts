import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brickset } from 'src/app/shared/legoset/brickset.model';
import { WantService } from '../want.service';

@Component({
  selector: 'app-lego-search',
  templateUrl: './lego-search.component.html',
  styleUrls: ['./lego-search.component.css']
})
export class LegoSearchComponent implements OnInit {

  constructor(private wantService: WantService) {

   }

  ngOnInit(): void {
  }

//   onFetchBricksets(searchInput:string){
// this.wantService.fetchBricksets(searchInput)
//   }

}
