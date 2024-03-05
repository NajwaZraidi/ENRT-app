import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferentielRoutingModule } from './referentiel-routing.module';
import { ReferentielComponent } from './referentiel.component';
@NgModule({
  declarations: [
    ReferentielComponent
  ],
  imports: [
    CommonModule,
    ReferentielRoutingModule
  ]
})
export class ReferentielModule { }
