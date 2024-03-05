import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionComponent } from './admission.component';
import { AdmissionBodyComponent } from './admission-body/admission-body.component';
import { AdmissionHeaderComponent } from './admission-header/admission-header.component';
import { AdmissionFooterComponent } from './admission-footer/admission-footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConsultationComponent } from './admission-body/consultation/consultation.component';
import { MouvementsComponent } from './admission-body/mouvements/mouvements.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    AdmissionComponent,
    AdmissionBodyComponent,
    AdmissionHeaderComponent,
    AdmissionFooterComponent,
    ConsultationComponent,
    MouvementsComponent
  ],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
    NzLayoutModule,
    BrowserAnimationsModule,
    NzAlertModule,
    NzCardModule,
    FontAwesomeModule,
    NzTabsModule,
    NzGridModule
  ]
})
export class AdmissionModule { }
