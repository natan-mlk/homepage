import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryWorkspaceComponent } from './gallery-workspace/gallery-workspace.component';



@NgModule({
  declarations: [GalleryWorkspaceComponent],
  imports: [
    CommonModule // this is for importing angular stuff np directives like ngFor 
  ]
})
export class GalleryModule { }
