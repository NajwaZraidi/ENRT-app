import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission/admission.component';

const routes: Routes = [
  { path: 'referentiel', loadChildren: () => import('./referentiel/referentiel.module').then(m => m.ReferentielModule) },
  { path: 'admission', loadChildren: () => import('./admission/admission.module').then(m => m.AdmissionModule) },
  {path:'', component:AdmissionComponent},
  // {path:'**', component:AdmissionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
