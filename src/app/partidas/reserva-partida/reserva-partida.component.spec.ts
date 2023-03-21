import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaPartidaComponent } from './reserva-partida.component';

describe('ReservaPartidaComponent', () => {
  let component: ReservaPartidaComponent;
  let fixture: ComponentFixture<ReservaPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaPartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
