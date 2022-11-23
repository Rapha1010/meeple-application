import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerBoardComponent } from './career-board.component';

describe('CareerBoardComponent', () => {
  let component: CareerBoardComponent;
  let fixture: ComponentFixture<CareerBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
