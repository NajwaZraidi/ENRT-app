import { NgZorroAntdModule } from './module/ng-zorro-antd/ng-zorro-antd.module';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmissionComponent } from './admission/admission.component';
import { IconsProviderModule } from './icons-provider.module';
import { AdmissionFooterComponent } from './admission/admission-footer/admission-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdmissionBodyComponent } from './admission/admission-body/admission-body.component';
import { ConsultationComponent } from './admission/admission-body/consultation/consultation.component';
import { AdmissionHeaderComponent } from './admission/admission-header/admission-header.component';
import { MouvementsComponent} from './admission/admission-body/mouvements/mouvements.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Referentiel2Component } from './referentiel2/referentiel2.component';
import { AjouterComponent } from './referentiel2/ajouter/ajouter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Referentiel2TableComponent } from './referentiel2/referentiel2-table/referentiel2-table.component';
import { VoirComponent} from './referentiel2/voir/voir.component';
import { EditComponent} from './referentiel2/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    AdmissionComponent,
    AdmissionHeaderComponent,
    AdmissionFooterComponent,
    AdmissionBodyComponent,
    ConsultationComponent,
    MouvementsComponent,
    Referentiel2Component,
    Referentiel2TableComponent,
    AjouterComponent,
    VoirComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
