import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AddFutureComponent} from './add-future/add-future.component';
import { FuturesComponent } from './futures/futures.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {BasicauthhttpinterceptorService} from './services/basicauthhttpinterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    FuturesComponent,
    AddFutureComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicauthhttpinterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
