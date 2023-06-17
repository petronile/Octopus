import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustDriveComponent } from './trust-drive.component';

describe('TrustDriveComponent', () => {
  let component: TrustDriveComponent;
  let fixture: ComponentFixture<TrustDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustDriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
