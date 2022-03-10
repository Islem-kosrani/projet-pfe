import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { Accueil2Component } from './accueil2/accueil2.component';
import { ChercherlivreurComponent } from './chercherlivreur/chercherlivreur.component';

import { ConnexionComponent } from './connexion/connexion.component';
import { DetailsComponent } from './details/details.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MissionsComponent } from './missions/missions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilComponent } from './profil/profil.component';
import { PublierComponent } from './publier/publier.component';
import { SurveillerComponent } from './surveiller/surveiller.component';


const routes: Routes = [
  
  {path:"accueil",component:AccueilComponent},
  {path:"accueil2",component:Accueil2Component},
  {path:"profil",component:ProfilComponent},
  {path:"publier",component:PublierComponent},
  {path:"chercherlivreur",component:ChercherlivreurComponent},
  {path:"missions",component:MissionsComponent},
  {path:"details",component:DetailsComponent},



  {path:"inscription",component:InscriptionComponent},
  {path:"connexion",component:ConnexionComponent},
  {path:"surveiller",component:SurveillerComponent},
  {path:"",redirectTo:"/accueil",pathMatch:'full'}  ,
  { path: '**', component:PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
