import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAnswerFormComponent } from './display-answer-form.component';

describe('DisplayAnswerFormComponent', () => {
  let component: DisplayAnswerFormComponent;
  let fixture: ComponentFixture<DisplayAnswerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayAnswerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAnswerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
