import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identify-patient',
  templateUrl: './identify-patient.component.html',
  styleUrls: ['./identify-patient.component.css']
})
export class IdentifyPatientComponent implements OnInit {
  startCheckIn: boolean = false;
  checkinForYourself: boolean = false;
  identifyScreen: boolean = false;
  genderOptions = [
    { name: 'Male', code: 'NY' },
    { name: 'Female', code: 'RM' },
    { name: 'Other', code: 'LDN' }
];

  formGrp: FormGroup = new FormGroup ({
      fullname: new FormControl('',Validators.required),
      dob: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
    });

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formGrp.valueChanges.subscribe(value => {
      //debugger;
    })
  }

  startIdentify() {
    this.startCheckIn = true;
    this.checkinForYourself = false;
    this.identifyScreen = true;
  }

  startCheckin() {
    this.startCheckIn = true;
    this.checkinForYourself = true;
  }

  onSearch() {
    this.formGrp.get('fullname')?.value === 'john' ? this.router.navigateByUrl('/verify-otp'): this.router.navigateByUrl('/register');
  }
}
