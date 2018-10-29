import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeD3WeatherComponent } from './visualize-d3-weather.component';

describe('VisualizeD3WeatherComponent', () => {
  let component: VisualizeD3WeatherComponent;
  let fixture: ComponentFixture<VisualizeD3WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizeD3WeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeD3WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
