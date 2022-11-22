import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBettingComponent } from './create-betting.component';

describe('CreateBettingComponent', () => {
  let component: CreateBettingComponent;
  let fixture: ComponentFixture<CreateBettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
