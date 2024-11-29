import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VitalsComponent } from './vitals/vitals.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HeightComponent } from './vitals/height/height.component';
import { WeightComponent } from './vitals/weight/weight.component';
import { TempratureComponent } from './vitals/temprature/temprature.component';
import { Spo2Component } from './vitals/spo2/spo2.component';
import { BpComponent } from './vitals/bp/bp.component';
import { BillingComponent } from './billing/billing.component';
import { PersonalInfo } from './personal-info/personal-info.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { IdentifyPatientComponent } from './All step component/identify-patient/identify-patient.component';
import { RegisterComponent1 } from './All step component/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { PatientDetails } from './All step component/patient-details/patient-details.component';
import { VerifyOtpComponent } from './All step component/verify-otp/verify-otp.component';
import { ReasonVisitComponent } from './All step component/reason-vist/reason-vist.component';
import { DemographicsComponent } from './All step component/demographics/demographics.component';
import { ConsentComponent } from './All step component/consent/consent.component';
import { OskInputDirective } from './keyboard/osk-input.directive';
import { KeyboardKeyDirective } from './keyboard/keyboard-key.directive';
import { KeyboardService } from './keyboard/keyboard.service';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { DialogModule } from 'primeng/dialog';
import {WebcamModule} from 'ngx-webcam';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent1,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    VitalsComponent,
    HeightComponent,
    WeightComponent,
    TempratureComponent,
    Spo2Component,
    BpComponent,
    BillingComponent,
    PersonalInfo,
    PatientHistoryComponent,
    IdentifyPatientComponent,
    PatientDetails,
    VerifyOtpComponent,
    ReasonVisitComponent,
    RegisterComponent1,
    DemographicsComponent,
    ConsentComponent,
    OskInputDirective,
    KeyboardKeyDirective,
    KeyboardComponent,
    //OnScreenKeyboardComponent,
    //FocusInputDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarModule,
    InputMaskModule,
    InputTextModule,
    InputTextareaModule,
    KeyFilterModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule,
    DialogModule,
    WebcamModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true},
    {provide: HTTP_INTERCEPTORS, useValue : loggingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useValue : headersInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useValue : errorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useValue : spinnerInterceptor, multi: true},
    KeyboardService
  ],
  //entryComponents: [OnScreenKeyboardComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
