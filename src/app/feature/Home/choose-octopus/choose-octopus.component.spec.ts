import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseOctopusComponent } from './choose-octopus.component';

describe('ChooseOctopusComponent', () => {
  let component: ChooseOctopusComponent;
  let fixture: ComponentFixture<ChooseOctopusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseOctopusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseOctopusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
