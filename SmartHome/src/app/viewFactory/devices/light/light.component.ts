import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/app/dataModel/device';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {

  constructor() { }

  @Input() device: Device;
  
  ngOnInit() {
  }
}
