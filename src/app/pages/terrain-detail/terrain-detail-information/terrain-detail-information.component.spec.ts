import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainDetailInformationComponent } from './terrain-detail-information.component';

describe('TerrainDetailInformationComponent', () => {
  let component: TerrainDetailInformationComponent;
  let fixture: ComponentFixture<TerrainDetailInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainDetailInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainDetailInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
