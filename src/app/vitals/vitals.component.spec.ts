import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewappComponent } from './vitals.component';

describe('NewappComponent', () => {
  let component: NewappComponent;
  let fixture: ComponentFixture<NewappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
