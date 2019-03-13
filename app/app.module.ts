import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HelloComponent } from "./app.helloComponent";

@NgModule({
    imports: [BrowserModule],
    declarations: [HelloComponent],
    bootstrap: [HelloComponent]
})
export class AppModule { }


// angular.module('',[]);