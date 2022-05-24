import { WantComponent } from "./want/want.component";
import { HaveComponent } from "./have/have.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HaveHomeComponent } from "./have/have-home/have-home.component";
import { SetDetailsComponent } from "./have/set-details/set-details.component";
import { HaveEditorComponent } from "./have/have-editor/have-editor.component";
import { LandingComponent } from "./landing/landing.component";
import { HaveResolverService } from "./have/have-resolver.service";
import { AuthComponent } from "./shared/auth/auth.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/have", pathMatch: "full" },
  { path: "landing", component: LandingComponent },
  {
    path: "have",
    component: HaveComponent,
    children: [
      {path: "", component: HaveHomeComponent},
      {path: 'new', component: HaveEditorComponent },
      {path: ':id', component: SetDetailsComponent, resolve: [HaveResolverService]},
      {path: ':id/edit', component: HaveEditorComponent, resolve: [HaveResolverService] }
  ],
  },
  { path: "want", component: WantComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
