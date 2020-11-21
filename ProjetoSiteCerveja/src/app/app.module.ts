import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { SobreComponent } from './sobre/sobre.component';
import { CervejasComponent } from './cervejas/cervejas.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { EquipeComponent } from './equipe/equipe.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    SobreComponent,
    CervejasComponent,
    SugestoesComponent,
    EquipeComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
