import { Component, OnInit } from '@angular/core';
import { Brickset } from 'src/app/shared/legoset/brickset.model';

@Component({
  selector: 'app-lego-results',
  templateUrl: './lego-results.component.html',
  styleUrls: ['./lego-results.component.css']
})
export class LegoResultsComponent implements OnInit {
 allSets: Brickset[]=[
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
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
