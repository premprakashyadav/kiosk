import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-height',
  templateUrl: './height.component.html',
  styleUrls: ['./height.component.css']
})
export class HeightComponent implements OnInit {

  showWeight: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  checkWeight() {
    this.showWeight = true;
  }

}
