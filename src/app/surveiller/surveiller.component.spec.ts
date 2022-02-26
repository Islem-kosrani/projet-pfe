import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveillerComponent } from './surveiller.component';

describe('SurveillerComponent', () => {
  let component: SurveillerComponent;
  let fixture: ComponentFixture<SurveillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveillerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
