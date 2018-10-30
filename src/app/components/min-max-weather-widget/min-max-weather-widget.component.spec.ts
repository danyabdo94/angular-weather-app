import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxWeatherWidgetComponent } from './min-max-weather-widget.component';

describe('MinMaxWeatherWidgetComponent', () => {
  let component: MinMaxWeatherWidgetComponent;
  let fixture: ComponentFixture<MinMaxWeatherWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinMaxWeatherWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinMaxWeatherWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
