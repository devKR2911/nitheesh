import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDeclarationComponent } from './resume-declaration.component';

describe('ResumeDeclarationComponent', () => {
  let component: ResumeDeclarationComponent;
  let fixture: ComponentFixture<ResumeDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeDeclarationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
