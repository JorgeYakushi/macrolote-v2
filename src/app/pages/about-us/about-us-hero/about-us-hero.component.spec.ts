import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsHeroComponent } from './about-us-hero.component';

describe('AboutUsHeroComponent', () => {
  let component: AboutUsHeroComponent;
  let fixture: ComponentFixture<AboutUsHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
