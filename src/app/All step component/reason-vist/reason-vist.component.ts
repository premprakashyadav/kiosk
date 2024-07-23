import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reason-vist',
  templateUrl: './reason-vist.component.html',
  styleUrls: ['./reason-vist.component.css']
})
export class ReasonVisitComponent implements OnInit {
  reason: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitReason() {
    if (this.reason.trim()) {
      alert(`Reason for visit: ${this.reason}`);
      // Logic to handle the reason, e.g., send it to the server
      // After handling, navigate to the next step/page
      this.router.navigate(['/billing']); // Replace '/next-step' with the actual route
    } else {
      alert('Please enter a reason for your visit.');
    }
  }
}
