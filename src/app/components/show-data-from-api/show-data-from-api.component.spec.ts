import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataFromApiComponent } from './show-data-from-api.component';

describe('ShowDataFromApiComponent', () => {
  let component: ShowDataFromApiComponent;
  let fixture: ComponentFixture<ShowDataFromApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDataFromApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDataFromApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
