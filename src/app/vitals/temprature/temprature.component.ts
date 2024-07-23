import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temprature',
  templateUrl: './temprature.component.html',
  styleUrls: ['./temprature.component.css']
})
export class TempratureComponent implements OnInit {

  showResults: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkResults() {
    this.showResults = true;
  }
}
