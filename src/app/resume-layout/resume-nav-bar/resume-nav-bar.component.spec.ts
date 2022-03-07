import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeNavBarComponent } from './resume-nav-bar.component';

describe('ResumeNavBarComponent', () => {
  let component: ResumeNavBarComponent;
  let fixture: ComponentFixture<ResumeNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
