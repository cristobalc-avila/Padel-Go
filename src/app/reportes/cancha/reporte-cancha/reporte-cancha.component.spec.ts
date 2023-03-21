import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCanchaComponent } from './reporte-cancha.component';

describe('ReporteCanchaComponent', () => {
  let component: ReporteCanchaComponent;
  let fixture: ComponentFixture<ReporteCanchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteCanchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
