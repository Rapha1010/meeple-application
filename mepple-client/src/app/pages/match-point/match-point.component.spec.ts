import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPointComponent } from './match-point.component';

describe('MatchPointComponent', () => {
  let component: MatchPointComponent;
  let fixture: ComponentFixture<MatchPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
