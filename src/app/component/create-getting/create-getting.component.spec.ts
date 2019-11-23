import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGettingComponent } from './create-getting.component';

describe('CreateGettingComponent', () => {
  let component: CreateGettingComponent;
  let fixture: ComponentFixture<CreateGettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
