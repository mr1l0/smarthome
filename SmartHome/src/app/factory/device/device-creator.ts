import { Device } from './../../dataModel/device';
export abstract class DeviceCreator {

  constructor(protected device: Device) { }

  abstract generate();
}
