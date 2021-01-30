import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedAppWorkspaceComponent } from './featured-app-workspace.component';

describe('FeaturedAppWorkspaceComponent', () => {
  let component: FeaturedAppWorkspaceComponent;
  let fixture: ComponentFixture<FeaturedAppWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedAppWorkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedAppWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
