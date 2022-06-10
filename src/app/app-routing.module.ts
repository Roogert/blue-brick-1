import { WantComponent } from "./want/want.component";
import { HaveComponent } from "./have/have.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SetDetailsComponent } from "./have/set-details/set-details.component";
import { HaveEditorComponent } from "./have/have-editor/have-editor.component";
import { LandingComponent } from "./landing/landing.component";
import { HaveResolverService } from "./have/have-resolver.service";
import { AuthComponent } from "./shared/auth/auth.component";
import { AuthGuard } from "./shared/auth/auth.guard";

const appRoutes: Routes = [
  { path: "", redirectTo: "/landing", pathMatch: "full" },
  { path: "landing", component: LandingComponent },
  { path: "have", component: HaveComponent, canActivate: [AuthGuard],
    children: [
      {path: 'new', component: HaveEditorComponent },
      {path: ':id', component: SetDetailsComponent, resolve: [HaveResolverService]},
      {path: ':id/edit', component: HaveEditorComponent, resolve: [HaveResolverService] }
    ],
  },
  { path: "want", component: WantComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
