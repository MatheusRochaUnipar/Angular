import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheImagemComponent } from './detalhe-imagem.component';

describe('DetalheImagemComponent', () => {
  let component: DetalheImagemComponent;
  let fixture: ComponentFixture<DetalheImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheImagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
