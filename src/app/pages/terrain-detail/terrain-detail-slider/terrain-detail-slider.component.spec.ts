import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainDetailSliderComponent } from './terrain-detail-slider.component';

describe('TerrainDetailSliderComponent', () => {
  let component: TerrainDetailSliderComponent;
  let fixture: ComponentFixture<TerrainDetailSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainDetailSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainDetailSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
