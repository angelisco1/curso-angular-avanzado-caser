import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOfertaComponent } from './new-oferta.component';

describe('NewOfertaComponent', () => {
  let component: NewOfertaComponent;
  let fixture: ComponentFixture<NewOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOfertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
