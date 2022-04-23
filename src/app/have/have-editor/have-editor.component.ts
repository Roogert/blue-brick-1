import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-have-editor',
  templateUrl: './have-editor.component.html',
  styleUrls: ['./have-editor.component.css']
})
export class HaveEditorComponent implements OnInit {
  idx: number;
  isEditMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params["id"];
      this.isEditMode = params["id"] != null;
      console.log("%c  isEditMode: ", "color: red;", this.isEditMode);
    });
  }

}
