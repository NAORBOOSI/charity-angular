import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGettingComponent } from './list-getting.component';

describe('ListGettingComponent', () => {
  let component: ListGettingComponent;
  let fixture: ComponentFixture<ListGettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
