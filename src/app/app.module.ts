import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmissionComponent } from './admission/admission.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { AdmissionFooterComponent } from './admission/admission-footer/admission-footer.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { AdmissionBodyComponent } from './admission/admission-body/admission-body.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { ConsultationComponent } from './admission/admission-body/consultation/consultation.component';
import { AdmissionHeaderComponent } from './admission/admission-header/admission-header.component';
import { MouvementsComponent} from './admission/admission-body/mouvements/mouvements.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AdmissionComponent,
    AdmissionHeaderComponent,
    AdmissionFooterComponent,
    AdmissionBodyComponent,
    ConsultationComponent,
    MouvementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzIconModule,
    FontAwesomeModule,
    NzTabsModule,
    NzDropDownModule,
    NzAlertModule,
    NzTableModule,
    NzGridModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
