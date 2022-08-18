import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTerrainComponent } from './home-terrain.component';

describe('HomeTerrainComponent', () => {
  let component: HomeTerrainComponent;
  let fixture: ComponentFixture<HomeTerrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTerrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
