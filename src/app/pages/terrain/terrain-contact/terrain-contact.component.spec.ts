import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainContactComponent } from './terrain-contact.component';

describe('TerrainContactComponent', () => {
  let component: TerrainContactComponent;
  let fixture: ComponentFixture<TerrainContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
