import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferentielComponent } from './referentiel.component';

const routes: Routes = [
{ path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) }
,{ path: '', component: ReferentielComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferentielRoutingModule { }
