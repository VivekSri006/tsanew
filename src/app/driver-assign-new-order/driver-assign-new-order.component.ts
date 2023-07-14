import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-driver-assign-new-order',
  templateUrl: './driver-assign-new-order.component.html',
  styleUrls: ['./driver-assign-new-order.component.css']
})
export class DriverAssignNewOrderComponent implements OnInit {
  value: number = 70;
  highValue: number = 500;
  options: Options = {
    floor: 0,
    ceil: 1000
  };
  constructor() { }

  ngOnInit(): void {
  }

}
