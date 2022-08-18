import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainCardsBoxComponent } from './terrain-cards-box.component';

describe('TerrainCardsBoxComponent', () => {
  let component: TerrainCardsBoxComponent;
  let fixture: ComponentFixture<TerrainCardsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainCardsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainCardsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
