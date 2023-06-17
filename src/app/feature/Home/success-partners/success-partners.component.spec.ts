import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPartnersComponent } from './success-partners.component';

describe('SuccessPartnersComponent', () => {
  let component: SuccessPartnersComponent;
  let fixture: ComponentFixture<SuccessPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
