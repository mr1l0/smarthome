import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/app/dataModel/device';

@Component({
  selector: 'app-device-factory',
  templateUrl: './device-factory.component.html',
  styleUrls: ['./device-factory.component.scss']
})
export class DeviceFactoryComponent<T> implements OnInit {

  constructor() { }
  
  @Input() device: {new(device: Device): T;};

  ngOnInit() {
  }

}
