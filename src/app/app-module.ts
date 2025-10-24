import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ComponentLogin } from './component.login/component.login';
import { ComponentsRegister } from './components.register/components.register';
import { ComponentService } from './component.service/component.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ComponentUpdateDetails } from './component.update-details/component.update-details';
import { ComponentGuardAuth } from './component.guard-auth/component.guard-auth';
@NgModule({
  declarations: [
    App,
    ComponentLogin,
    ComponentsRegister,
    ComponentService,
    ComponentUpdateDetails,
    ComponentGuardAuth
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
      CommonModule,
    

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
