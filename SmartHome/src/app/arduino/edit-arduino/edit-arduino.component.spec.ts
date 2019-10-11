import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArduinoComponent } from './edit-arduino.component';

describe('EditArduinoComponent', () => {
  let component: EditArduinoComponent;
  let fixture: ComponentFixture<EditArduinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArduinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArduinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
