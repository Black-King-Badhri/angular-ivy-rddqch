import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TextboxComponent } from './textbox/textbox.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TextboxComponent,WelcomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
