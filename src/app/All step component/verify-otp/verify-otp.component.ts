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
  isPopupVisible: boolean = false;
  displaySuccessPopup: boolean =false;

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
    // Show the loading dialog
    this.isPopupVisible = true;

    // Simulate OTP verification with a timeout for now
    setTimeout(() => {
      this.displaySuccessPopup = true;  // Show the success popup after processing
      this.router.navigateByUrl('/patient-details');  // Navigate to the next page
    }, 3000);  // 3-second delay for demo purposes, replace with actual API call
  }

  submitSecurityAnswer() {
    // Logic to verify security answer
    this.router.navigateByUrl('/patient-details');
  }

}
