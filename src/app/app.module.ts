import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiclodevidaComponent } from './ciclodevida/ciclodevida.component';
import { OtrocomponenteComponent } from './otrocomponente/otrocomponente.component';
import { ComponentepruebaComponent } from './componenteprueba/componenteprueba.component';
import { ComponentepruebahijoComponent } from './componentepruebahijo/componentepruebahijo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CiclodevidaComponent,
    OtrocomponenteComponent,
    ComponentepruebaComponent,
    ComponentepruebahijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
