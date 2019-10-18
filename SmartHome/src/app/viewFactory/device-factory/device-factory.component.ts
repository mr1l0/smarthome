import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/app/dataModel/device';

@Component({
  selector: 'app-device-factory',
  templateUrl: './device-factory.component.html',
  styleUrls: ['./device-factory.component.scss']
})
export class DeviceFactoryComponent implements OnInit {

  constructor() { }

  @Input() device: Device;

  ngOnInit() {
  }

}
