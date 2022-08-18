import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainInfoCardComponent } from './terrain-info-card.component';

describe('TerrainInfoCardComponent', () => {
  let component: TerrainInfoCardComponent;
  let fixture: ComponentFixture<TerrainInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
