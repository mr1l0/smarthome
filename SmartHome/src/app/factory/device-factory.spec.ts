import { DeviceFactory } from './device-factory';

describe('DeviceFactory', () => {
  it('should create an instance', () => {
    expect(new DeviceFactory()).toBeTruthy();
  });
});
