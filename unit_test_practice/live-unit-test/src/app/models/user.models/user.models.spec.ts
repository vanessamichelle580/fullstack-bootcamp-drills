import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModels } from './user.models';

describe('UserModels', () => {
  let component: UserModels;
  let fixture: ComponentFixture<UserModels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserModels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserModels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
