import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  pay() {
    this.router.navigateByUrl('/vitals/weight');
  }

  paymentMethod: string;
  paymentDetails: any = {
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  };

  selectPaymentMethod(method: string) {
    this.paymentMethod = method;
  }

  submitPayment() {
    // Logic to submit payment details
    alert('Payment submitted successfully.');
  }
}
