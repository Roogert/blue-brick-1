import { WantComponent } from "./want/want.component";
import { HaveComponent } from "./have/have.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HaveHomeComponent } from "./have/have-home/have-home.component";
import { SetDetailsComponent } from "./have/set-details/set-details.component";
import { HaveEditorComponent } from "./have/have-editor/have-editor.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/have", pathMatch: "full" },
  {
    path: "have",
    component: HaveComponent,
    children: [
      {path: "", component: HaveHomeComponent},
      {path: 'new', component: HaveEditorComponent },
      {path: ':id', component: SetDetailsComponent},
      {path: ':id/edit', component: HaveEditorComponent }
  ],
  },
  { path: "want", component: WantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
