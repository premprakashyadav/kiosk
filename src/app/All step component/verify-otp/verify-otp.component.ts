import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {

  otp1: FormControl = new FormControl();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verifyOtp() {
    if(this.otp1 && this.otp1.value === "1234") {
      this.router.navigateByUrl('/demographics');
    }
  }

  showOTPSection: boolean = false;
  showSecurityQuestionSection: boolean = false;
  otp: string = '';
  securityAnswer: string = '';
  securityQuestion: string = 'What is your pet\'s name?'; // Example question

  verifyThroughMobile() {
    this.showOTPSection = true;
    this.showSecurityQuestionSection = false;
    // Logic to send OTP to user's mobile number
  }

  enterSecurityQuestion() {
    this.showOTPSection = false;
    this.showSecurityQuestionSection = true;
    // Logic to display security question
  }

  submitOTP() {
    // Logic to verify OTP
    alert(`OTP Submitted: ${this.otp}`);
    this.router.navigateByUrl('/patient-details');
  }

  submitSecurityAnswer() {
    // Logic to verify security answer
    this.router.navigateByUrl('/patient-details');
  }

}
