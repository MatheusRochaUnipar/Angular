import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProfessorComponent } from './detalhe-professor.component';

describe('DetalheProfessorComponent', () => {
  let component: DetalheProfessorComponent;
  let fixture: ComponentFixture<DetalheProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheProfessorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
