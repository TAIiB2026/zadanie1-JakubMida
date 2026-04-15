import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NowyKomponentComponent } from './nowy-komponent/nowy-komponent.component';
import { RamkaDirective } from './ramka.directive';
import { ListaComponent } from "./lista/lista.component";

@NgModule({
  declarations: [
    AppComponent,
    NowyKomponentComponent,
    RamkaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
