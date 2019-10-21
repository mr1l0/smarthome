import { DeviceComponent } from './../../dataModel/device-component';
import { Device } from './../../dataModel/device';
import { DeviceCreator } from './device-creator';
export class LightCreator extends DeviceCreator {

  constructor(protected device: Device) {
    super(device);
  }

  components: DeviceComponent[];

  generate() {
    let component: DeviceComponent;
    component = new DeviceComponent();
    component._source.name = 'Relé';

    this.components.push(component);
  }
}
