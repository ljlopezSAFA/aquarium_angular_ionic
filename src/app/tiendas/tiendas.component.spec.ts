import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TiendasComponent } from './tiendas.component';

describe('TiendasComponent', () => {
  let component: TiendasComponent;
  let fixture: ComponentFixture<TiendasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TiendasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
