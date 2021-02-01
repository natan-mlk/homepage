import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryWorkspaceComponent } from './gallery-workspace/gallery-workspace.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { GalleryDialogComponent } from './gallery-dialog/gallery-dialog.component';


@NgModule({
  declarations: [GalleryWorkspaceComponent, GalleryDialogComponent],
  imports: [
    CommonModule, // this is for importing angular stuff np directives like ngFor
    MatGridListModule,
    MatDialogModule
  ]
})
export class GalleryModule { }
