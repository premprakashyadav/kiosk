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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.router.navigateByUrl('/billing');
  }

  agree() {
    // Logic to handle consent agreement
    this.router.navigateByUrl('/reason-visit');
    // Redirect to the next step or page
  }

  disagree() {
    // Logic to handle consent disagreement
    alert('You have disagreed to the consent form.');
    // Redirect to a different page or show a message
  }

}
