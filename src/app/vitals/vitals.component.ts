import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
