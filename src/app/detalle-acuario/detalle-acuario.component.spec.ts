import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetalleAcuarioComponent } from './detalle-acuario.component';

describe('DetalleAcuarioComponent', () => {
  let component: DetalleAcuarioComponent;
  let fixture: ComponentFixture<DetalleAcuarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DetalleAcuarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleAcuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
