import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQuienesSomosComponent } from './home-quienes-somos.component';

describe('HomeQuienesSomosComponent', () => {
  let component: HomeQuienesSomosComponent;
  let fixture: ComponentFixture<HomeQuienesSomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeQuienesSomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQuienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
