import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterListItemComponent } from './parameter-list-item.component';

describe('ParameterListItemComponent', () => {
  let component: ParameterListItemComponent;
  let fixture: ComponentFixture<ParameterListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
