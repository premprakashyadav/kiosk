import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {

  otp: FormControl = new FormControl();
  isPopupVisible: boolean = false;
popupMessage: string = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.router.navigateByUrl('/billing');
  }

  agree() {
    this.showPopup('You have agreed to the consent form.', () => {
      this.router.navigateByUrl('/reason-visit');
    });
  }
  
  disagree() {
    this.showPopup('You have disagreed to the consent form.', () => {
      // Add any further action for disagreement, if necessary
    });
  }
  
  showPopup(message: string, callback: () => void) {
    this.popupMessage = message; // Assign the message to a variable
    this.isPopupVisible = true;  // Display the popup
  
    setTimeout(() => {
      this.isPopupVisible = false; // Hide the popup
      callback(); // Perform the next action
    }, 3000); // Show the popup for 3 seconds
  }

}
