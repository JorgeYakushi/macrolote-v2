import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsTeamComponent } from './about-us-team.component';

describe('AboutUsTeamComponent', () => {
  let component: AboutUsTeamComponent;
  let fixture: ComponentFixture<AboutUsTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
