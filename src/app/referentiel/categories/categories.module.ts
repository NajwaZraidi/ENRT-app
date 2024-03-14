import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPaginationModule } from 'ng-zorro-antd/pagination'
import { CategorieService } from '../../services/categorie.service';
@NgModule({
  declarations: [
    CategoriesComponent,
    AddComponent,
    EditComponent,
    ViewComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    NzCardModule,
    ReactiveFormsModule,
    NzSwitchModule,
    NzInputModule,
    HttpClientModule,
    FontAwesomeModule,
    NzLayoutModule,
    NzTableModule,
    NzGridModule,
    NzCollapseModule,
    NzSelectModule,
    NzPaginationModule
  ],
  providers: [CategorieService]
})
export class CategoriesModule { }
