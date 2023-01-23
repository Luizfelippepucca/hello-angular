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

const icons = {
  houseDoor,
  boxArrowInLeft,
  chevronBarExpand,
  arrowsAngleExpand,
};

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(icons),
  ],
})
export class AppModule {}
