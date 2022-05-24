import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { LandingService } from 'src/app/landing/landing.service';
import { NgForm } from '@angular/forms';
import { Brickset } from 'src/app/shared/legoset/brickset.model';
import { HaveService } from '../have.service';

@Component({
  selector: 'app-have-editor',
  templateUrl: './have-editor.component.html',
  styleUrls: ['./have-editor.component.css']
})
export class HaveEditorComponent implements OnInit {
  idx: number;
  isEditMode = false;

  bricksetDetails: Brickset = {
    name: "",
    set_num: "",
    num_parts: 0,
    set_img_url: "",
    year: 0,
    theme_id: 0,
    set_url: "",
    last_modified_dt: ""
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // private landingService: LandingService,
    private haveService: HaveService,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params["id"];
      this.isEditMode = params["id"] != null;

      if(this.isEditMode){
        this.bricksetDetails = this.haveService.getBrickset(this.idx);

      }
    });
  }

  onSubmit(formObj: NgForm) {
    // Destructor set properties
      const { name, set_num, num_parts, set_img_url } = formObj.value;
    // Set local bricksetDetails to formObj values
    this.bricksetDetails = new Brickset(
      name,
      set_num,
      num_parts,
      set_img_url
    );

// Conditional statement to call different methods/functions depending on what "mode" we are in
if (this.isEditMode) {
  // Edit set
  this.haveService.updateBrickset(this.idx, this.bricksetDetails);
} else {
  // Create new set
  this.haveService.addBrickset(this.bricksetDetails);
}

// Reset Form
this.onResetForm();
}

onResetForm() {
this.router.navigate(["../"], { relativeTo: this.route });
}


}
