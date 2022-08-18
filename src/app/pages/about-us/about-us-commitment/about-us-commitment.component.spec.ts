import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCommitmentComponent } from './about-us-commitment.component';

describe('AboutUsCommitmentComponent', () => {
  let component: AboutUsCommitmentComponent;
  let fixture: ComponentFixture<AboutUsCommitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsCommitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsCommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
