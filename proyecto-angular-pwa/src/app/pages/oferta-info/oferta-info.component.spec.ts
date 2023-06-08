import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaInfoComponent } from './oferta-info.component';

describe('OfertaInfoComponent', () => {
  let component: OfertaInfoComponent;
  let fixture: ComponentFixture<OfertaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
