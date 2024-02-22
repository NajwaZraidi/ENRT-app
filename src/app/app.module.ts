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
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
