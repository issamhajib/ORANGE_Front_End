import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllincidentsComponent } from './allincidents.component';

describe('AllincidentsComponent', () => {
  let component: AllincidentsComponent;
  let fixture: ComponentFixture<AllincidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllincidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllincidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
