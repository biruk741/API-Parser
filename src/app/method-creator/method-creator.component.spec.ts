import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodCreatorComponent } from './method-creator.component';

describe('MethodCreatorComponent', () => {
  let component: MethodCreatorComponent;
  let fixture: ComponentFixture<MethodCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
