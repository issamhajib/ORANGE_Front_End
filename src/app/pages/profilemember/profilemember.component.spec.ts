import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilememberComponent } from './profilemember.component';

describe('ProfilememberComponent', () => {
  let component: ProfilememberComponent;
  let fixture: ComponentFixture<ProfilememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilememberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
