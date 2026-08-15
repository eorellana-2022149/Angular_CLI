import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ButtonComponent,
    NavbarComponent,
    ListComponent,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
