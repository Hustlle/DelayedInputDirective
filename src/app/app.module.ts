import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DelayedInputDirective } from "./directive/delayedInput.directive";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DelayedInputDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
