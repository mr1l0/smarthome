import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/app/dataModel/device';
import { CallHardwareService } from 'src/app/services/call-hardware.service';
import { DeviceComponent } from 'src/app/dataModel/device-component';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent<T> implements OnInit {

  constructor(
    protected callHardwareService: CallHardwareService
  ) { }

  light: Device;

  @Input() set device(device: Device) {
    this.light = device;
    console.log(device);
    const rele: DeviceComponent = device._source.components.find(result => result._source.name === 'Relé');
    if (rele) {
      this.callHardwareService.read(rele).subscribe((result: any) => {
        rele._source.get = result.value;
      });
    }
  }

  click(light: Device) {
    console.log(light);

  }

  ngOnInit() {

    // const rele: DeviceComponent = this.device._source.components.find(result => result._source.name === 'relé');
    // this.callHardwareService.read(rele).subscribe((result: any) => {
    //   rele._source.get = result.value;
    // });
  }
}
