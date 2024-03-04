import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Referentiel2Component } from './referentiel2/referentiel2.component';
import { AdmissionComponent } from './admission/admission.component';
import { AjouterComponent } from './referentiel2/ajouter/ajouter.component';
import { VoirComponent } from './referentiel2/voir/voir.component';
import { EditComponent } from './referentiel2/edit/edit.component';

const routes: Routes = [
  { path:"admission",component:AdmissionComponent},
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
  { path:"referentiel",component:Referentiel2Component},
  {path :"referentiel/ajouter",component:AjouterComponent},
  {path :"referentiel/voir",component:VoirComponent},
  {path :"referentiel/voir/edit",component:EditComponent},
  { path: '', pathMatch: 'full', redirectTo: '/admission' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
