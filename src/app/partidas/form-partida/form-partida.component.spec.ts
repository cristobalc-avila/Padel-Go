import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPartidaComponent } from './form-partida.component';

describe('FormPartidaComponent', () => {
  let component: FormPartidaComponent;
  let fixture: ComponentFixture<FormPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
