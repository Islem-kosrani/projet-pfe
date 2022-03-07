import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { Accueil2Component } from './accueil2/accueil2.component';

import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilComponent } from './profil/profil.component';
import { PublierComponent } from './publier/publier.component';
import { SurveillerComponent } from './surveiller/surveiller.component';


const routes: Routes = [
  
  {path:"accueil",component:AccueilComponent},
  {path:"accueil2",component:Accueil2Component},
  {path:"profil",component:ProfilComponent},
  {path:"publier",component:PublierComponent},
 

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
