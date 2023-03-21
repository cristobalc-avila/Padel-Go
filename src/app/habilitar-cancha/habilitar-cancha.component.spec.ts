import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitarCanchaComponent } from './habilitar-cancha.component';

describe('HabilitarCanchaComponent', () => {
  let component: HabilitarCanchaComponent;
  let fixture: ComponentFixture<HabilitarCanchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitarCanchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitarCanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
