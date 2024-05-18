import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { AppRoutingModule } from "./app-routing-module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent, EmptyRouteComponent],
  imports: [AppRoutingModule, BrowserModule, CommonModule, RouterOutlet],
  bootstrap: [AppComponent],
})
export class AppModule { }