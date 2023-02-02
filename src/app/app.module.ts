import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgxBootstrapIconsModule,
  houseDoor,
  boxArrowInLeft,
  chevronBarExpand,
  arrowsAngleExpand,
} from 'ngx-bootstrap-icons';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

const icons = {
  houseDoor,
  boxArrowInLeft,
  chevronBarExpand,
  arrowsAngleExpand,
};

@NgModule({
  declarations: [AppComponent, LoginComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(icons),
  ],
})
export class AppModule {}
