import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProdsComponent } from './list-prods.component';

describe('ListProdsComponent', () => {
  let component: ListProdsComponent;
  let fixture: ComponentFixture<ListProdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
