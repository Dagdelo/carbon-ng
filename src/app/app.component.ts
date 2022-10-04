import { Component, OnInit } from '@angular/core';
import { IconService } from 'carbon-components-angular';

import Carbon32 from "@carbon/icons/es/carbon/32";
import Carbon24 from "@carbon/icons/es/carbon/24";
import Carbon20 from "@carbon/icons/es/carbon/20";
import Carbon16 from "@carbon/icons/es/carbon/16";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'carbon-ng';

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.iconService.registerAll([
      Carbon32,
      Carbon24,
      Carbon20,
      Carbon16
    ]);
  }
}
