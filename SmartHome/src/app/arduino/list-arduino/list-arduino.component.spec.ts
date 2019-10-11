import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArduinoComponent } from './list-arduino.component';

describe('ListArduinoComponent', () => {
  let component: ListArduinoComponent;
  let fixture: ComponentFixture<ListArduinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListArduinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArduinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
