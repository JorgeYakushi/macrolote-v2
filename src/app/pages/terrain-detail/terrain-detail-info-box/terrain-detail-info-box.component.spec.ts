import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainDetailInfoBoxComponent } from './terrain-detail-info-box.component';

describe('TerrainDetailInfoBoxComponent', () => {
  let component: TerrainDetailInfoBoxComponent;
  let fixture: ComponentFixture<TerrainDetailInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainDetailInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainDetailInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
