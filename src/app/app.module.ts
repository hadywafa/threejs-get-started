import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GetStartedComponent } from "./components/get-started/get-started.component";
import { CubeComponent } from "./components/cube/cube.component";

@NgModule({
  declarations: [AppComponent,CubeComponent, GetStartedComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
