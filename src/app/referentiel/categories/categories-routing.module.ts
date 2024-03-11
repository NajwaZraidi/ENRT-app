import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'ajouter', component: AddComponent, },
  { path:'edit',component:EditComponent, },
  { path: 'consulter', component: ViewComponent, },
  { path: 'list', component: ListComponent, },
  { path: '', component: CategoriesComponent,  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
