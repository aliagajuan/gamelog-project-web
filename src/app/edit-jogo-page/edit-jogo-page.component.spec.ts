import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJogoPageComponent } from './edit-jogo-page.component';

describe('EditJogoPageComponent', () => {
  let component: EditJogoPageComponent;
  let fixture: ComponentFixture<EditJogoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditJogoPageComponent]
    });
    fixture = TestBed.createComponent(EditJogoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
