import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyincidentsComponent } from './myincidents.component';

describe('MyincidentsComponent', () => {
  let component: MyincidentsComponent;
  let fixture: ComponentFixture<MyincidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyincidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyincidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
