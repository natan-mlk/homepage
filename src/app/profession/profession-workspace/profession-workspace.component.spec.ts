import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionWorkspaceComponent } from './profession-workspace.component';

describe('ProfessionWorkspaceComponent', () => {
  let component: ProfessionWorkspaceComponent;
  let fixture: ComponentFixture<ProfessionWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionWorkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
