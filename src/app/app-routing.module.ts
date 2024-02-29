import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Referentiel2Component } from './referentiel2/referentiel2.component';
import { AdmissionComponent } from './admission/admission.component';
import { AjouterComponent } from './referentiel2/ajouter/ajouter.component';
import { VoirComponent } from './referentiel2/voir/voir.component';
import { EditComponent } from './referentiel2/edit/edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/Admission' },
  { path:"Admission",component:AdmissionComponent},
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
  { path:"Referentiel",component:Referentiel2Component},
  {path :"Referentiel/Ajouter",component:AjouterComponent},
  {path :"Referentiel/Voir",component:VoirComponent},
  {path :"Referentiel/Voir/Edit",component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
