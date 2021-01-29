import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryWorkspaceComponent } from './gallery-workspace.component';

describe('GalleryWorkspaceComponent', () => {
  let component: GalleryWorkspaceComponent;
  let fixture: ComponentFixture<GalleryWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryWorkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
