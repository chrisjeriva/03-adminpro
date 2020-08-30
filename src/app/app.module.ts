import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//#region [Modules]
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
//#endregion [Modules]

//#region [Components]
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//#endregion [Components]

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
