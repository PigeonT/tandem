import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachLanguageComponent } from './teach-language.component';

describe('TeachLanguageComponent', () => {
  let component: TeachLanguageComponent;
  let fixture: ComponentFixture<TeachLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
