import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reason-vist',
  templateUrl: './reason-vist.component.html',
  styleUrls: ['./reason-vist.component.css']
})
export class ReasonVisitComponent implements OnInit {
  reason: string = '';
  popupMessage: string = '';
popupIcon: string = '';
popupColor: string = '';
isPopupVisible: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitReason() {
    if (this.reason.trim()) {
      this.popupMessage = `Reason for visit submitted successfully: ${this.reason}`;
      this.popupIcon = 'pi-check-circle'; // Success icon
      this.popupColor = 'green'; // Success color
      this.isPopupVisible = true;
  
      setTimeout(() => {
        this.isPopupVisible = false;
        this.router.navigate(['/billing']); // Navigate after popup
      }, 3000); // Display popup for 3 seconds
    } else {
      this.popupMessage = 'Please enter a reason for your visit.';
      this.popupIcon = 'pi-times-circle'; // Error icon
      this.popupColor = 'red'; // Error color
      this.isPopupVisible = true;
  
      setTimeout(() => {
        this.isPopupVisible = false;
      }, 3000); // Display popup for 3 seconds
    }
  }
  
}
