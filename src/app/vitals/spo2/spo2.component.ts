import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spo2',
  templateUrl: './spo2.component.html',
  styleUrls: ['./spo2.component.css']
})
export class Spo2Component implements OnInit {

  showResults: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  checkResults() {
    this.showResults = true;
  }

}
