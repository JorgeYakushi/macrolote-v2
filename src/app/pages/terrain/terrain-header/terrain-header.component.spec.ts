import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainHeaderComponent } from './terrain-header.component';

describe('TerrainHeaderComponent', () => {
  let component: TerrainHeaderComponent;
  let fixture: ComponentFixture<TerrainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
