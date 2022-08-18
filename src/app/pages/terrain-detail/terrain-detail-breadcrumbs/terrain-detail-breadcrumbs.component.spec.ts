import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainDetailBreadcrumbsComponent } from './terrain-detail-breadcrumbs.component';

describe('TerrainDetailBreadcrumbsComponent', () => {
  let component: TerrainDetailBreadcrumbsComponent;
  let fixture: ComponentFixture<TerrainDetailBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainDetailBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainDetailBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
