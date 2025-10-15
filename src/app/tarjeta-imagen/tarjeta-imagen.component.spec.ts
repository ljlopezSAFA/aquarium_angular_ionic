import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TarjetaImagenComponent } from './tarjeta-imagen.component';

describe('TarjetaImagenComponent', () => {
  let component: TarjetaImagenComponent;
  let fixture: ComponentFixture<TarjetaImagenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TarjetaImagenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
