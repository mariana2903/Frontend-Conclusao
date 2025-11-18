import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aba2 } from './aba2';

describe('Aba2', () => {
  let component: Aba2;
  let fixture: ComponentFixture<Aba2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aba2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aba2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
