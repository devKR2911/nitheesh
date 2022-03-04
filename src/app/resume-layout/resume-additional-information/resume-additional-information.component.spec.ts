import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAdditionalInformationComponent } from './resume-additional-information.component';

describe('ResumeAdditionalInformationComponent', () => {
  let component: ResumeAdditionalInformationComponent;
  let fixture: ComponentFixture<ResumeAdditionalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeAdditionalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAdditionalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
