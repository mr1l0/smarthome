import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceFactoryComponent } from './device-factory.component';

describe('DeviceFactoryComponent', () => {
  let component: DeviceFactoryComponent;
  let fixture: ComponentFixture<DeviceFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
