import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WeightComponent } from './vitals/weight/weight.component';
import { HeightComponent } from './vitals/height/height.component';
import { TempratureComponent } from './vitals/temprature/temprature.component';
import { Spo2Component } from './vitals/spo2/spo2.component';
import { BpComponent } from './vitals/bp/bp.component';
import { PersonalInfo } from './personal-info/personal-info.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { BillingComponent } from './billing/billing.component';
import { IdentifyPatientComponent } from './All step component/identify-patient/identify-patient.component';
import { PatientDetails } from './All step component/patient-details/patient-details.component';
import { VerifyOtpComponent } from './All step component/verify-otp/verify-otp.component';
import { DemographicsComponent } from './All step component/demographics/demographics.component';
import { ReasonVisitComponent } from './All step component/reason-vist/reason-vist.component';
import { VitalsComponent } from './vitals/vitals.component';
import { RegisterComponent1 } from './All step component/register/register.component';
import { ConsentComponent } from './All step component/consent/consent.component';

const routes: Routes = [
  // {path: '', component: WeightComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  // {path: 'personal-info', component: PersonalInfo},
  // {path: 'patient-history', component: PatientHistoryComponent},
  {path: 'vitals', component: VitalsComponent,
    children: [
      {path: 'weight', component: WeightComponent},
      {path: 'height', component: HeightComponent},
      {path: 'temprature', component: TempratureComponent},
      {path: 'spo2', component: Spo2Component},
      {path: 'bp', component: BpComponent}
    ]},
  {path: 'billing', component: BillingComponent},
  

  {path: 'identify-patient', component: IdentifyPatientComponent},
  {path: 'patient-details', component: PatientDetails},
  {path: 'verify-otp', component: VerifyOtpComponent},
  {path: 'register', component: RegisterComponent1},
  {path: 'demographics', component: DemographicsComponent},
  {path: 'reason-visit', component: ReasonVisitComponent},
  {path: 'consent', component: ConsentComponent},
  { path: '**', component: IdentifyPatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
