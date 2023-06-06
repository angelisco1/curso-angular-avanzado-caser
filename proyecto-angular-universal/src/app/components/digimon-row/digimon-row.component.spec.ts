import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonRowComponent } from './digimon-row.component';

describe('DigimonRowComponent', () => {
  let component: DigimonRowComponent;
  let fixture: ComponentFixture<DigimonRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
