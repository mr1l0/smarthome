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

  //@Input() device: {new(device: Device): T; };

  @Input() set device(device: Device) {
    if (!device) {
      return;
    }
    const rele: DeviceComponent = device._source.components.find(result => result._source.name === 'relé');
    this.callHardwareService.read(rele).subscribe((result: any) => {
      rele._source.get = result.value;
    });
  }

  ngOnInit() {
  }
}
