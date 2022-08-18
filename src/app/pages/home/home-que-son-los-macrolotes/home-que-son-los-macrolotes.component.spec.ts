import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQueSonLosMacrolotesComponent } from './home-que-son-los-macrolotes.component';

describe('HomeQueSonLosMacrolotesComponent', () => {
  let component: HomeQueSonLosMacrolotesComponent;
  let fixture: ComponentFixture<HomeQueSonLosMacrolotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeQueSonLosMacrolotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQueSonLosMacrolotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
