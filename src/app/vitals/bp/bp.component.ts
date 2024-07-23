import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bp',
  templateUrl: './bp.component.html',
  styleUrls: ['./bp.component.css']
})
export class BpComponent implements OnInit {

  showResults: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  checkResults() {
    this.showResults = true;
  }
}
