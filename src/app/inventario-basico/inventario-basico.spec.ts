import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventarioBasico } from './inventario-basico';

describe('InventarioBasico', () => {
  let component: InventarioBasico;
  let fixture: ComponentFixture<InventarioBasico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioBasico],
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioBasico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
