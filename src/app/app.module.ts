import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLoginModule } from './auth-login/auth-login.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPawdComponent } from './forget-pawd/forget-pawd.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ForgetPawdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthLoginModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
