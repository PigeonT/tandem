import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnLanguageComponent } from './learn-language.component';

describe('LearnLanguageComponent', () => {
  let component: LearnLanguageComponent;
  let fixture: ComponentFixture<LearnLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
