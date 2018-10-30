import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDashboardWidgetComponent } from './city-dashboard-widget.component';

describe('CityDashboardWidgetComponent', () => {
  let component: CityDashboardWidgetComponent;
  let fixture: ComponentFixture<CityDashboardWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDashboardWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDashboardWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
