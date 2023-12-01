import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GetStartedComponent } from "./components/get-started/get-started.component";
import { CubeComponent } from "./components/cube/cube.component";

const routes: Routes = [
  { path: "", redirectTo: "room", pathMatch: "full" },
  { path: "get-started", component: GetStartedComponent },
  { path: "room", component: CubeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
