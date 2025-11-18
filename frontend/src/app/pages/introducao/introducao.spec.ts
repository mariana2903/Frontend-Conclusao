import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aba1 } from './aba1';

describe('Aba1', () => {
  let component: Aba1;
  let fixture: ComponentFixture<Aba1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aba1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aba1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
