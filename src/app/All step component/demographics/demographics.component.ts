import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.css']
})
export class DemographicsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  proceed() {
    this.router.navigateByUrl('/reason-visit');
  }

  checkin() {
    this.router.navigateByUrl('/consent');
  }
}
