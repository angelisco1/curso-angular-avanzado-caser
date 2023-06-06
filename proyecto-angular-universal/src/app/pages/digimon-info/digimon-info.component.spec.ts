import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonInfoComponent } from './digimon-info.component';

describe('DigimonInfoComponent', () => {
  let component: DigimonInfoComponent;
  let fixture: ComponentFixture<DigimonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
