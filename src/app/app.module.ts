import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [AppComponent, DataBindingComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LoginModule],
})
export class AppModule {}
