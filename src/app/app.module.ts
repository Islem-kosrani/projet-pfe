import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SurveillerComponent } from './surveiller/surveiller.component';
import { Accueil2Component } from './accueil2/accueil2.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AccueilComponent,
    InscriptionComponent,
    ConnexionComponent,
    SurveillerComponent,
    Accueil2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
