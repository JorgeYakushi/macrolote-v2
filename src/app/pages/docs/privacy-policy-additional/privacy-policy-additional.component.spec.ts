import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyAdditionalComponent } from './privacy-policy-additional.component';

describe('PrivacyPolicyAdditionalComponent', () => {
  let component: PrivacyPolicyAdditionalComponent;
  let fixture: ComponentFixture<PrivacyPolicyAdditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyAdditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
