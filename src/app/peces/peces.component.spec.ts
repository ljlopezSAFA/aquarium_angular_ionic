import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PecesComponent } from './peces.component';

describe('PecesComponent', () => {
  let component: PecesComponent;
  let fixture: ComponentFixture<PecesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PecesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
