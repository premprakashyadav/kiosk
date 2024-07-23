import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetails implements OnInit {
  personalDetails = {
    name: 'John Doe',
    dob: '01/01/1990',
    contact: '123-456-7890'
  };

  insuranceDetails = {
    provider: 'XYZ Insurance',
    policyNumber: 'ABC123456'
  };

  appointmentDetails = {
    doctor: 'Dr. Smith',
    date: '07/15/2024',
    time: '10:00 AM'
  };

  personalConfirmed = false;
  insuranceConfirmed = false;
  appointmentConfirmed = false;

  get allConfirmed(): boolean {
    return this.personalConfirmed && this.insuranceConfirmed && this.appointmentConfirmed;
  }

  constructor(private router: Router) { }

  ngOnInit(): void { }

  confirmSection(section: string) {
    if (section === 'personal') {
      this.personalConfirmed = true;
    } else if (section === 'insurance') {
      this.insuranceConfirmed = true;
    } else if (section === 'appointment') {
      this.appointmentConfirmed = true;
    }
    // if(this.personalConfirmed && this.insuranceConfirmed && this.appointmentConfirmed) {
    //   this.router.navigateByUrl('/demographics');
    // }
  }

  editSection(section: string) {
    if (section === 'personal') {
      this.personalConfirmed = false;
      // Logic to allow editing personal details
    } else if (section === 'insurance') {
      this.insuranceConfirmed = false;
      // Logic to allow editing insurance details
    } else if (section === 'appointment') {
      this.appointmentConfirmed = false;
      // Logic to allow editing appointment details
    }
  }

  proceed() {
    // Logic to proceed to the next step
    this.router.navigateByUrl('/consent');
  }
}
