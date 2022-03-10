import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherlivreurComponent } from './chercherlivreur.component';

describe('ChercherlivreurComponent', () => {
  let component: ChercherlivreurComponent;
  let fixture: ComponentFixture<ChercherlivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChercherlivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercherlivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
