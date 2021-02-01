import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryWorkspaceComponent } from './gallery-workspace/gallery-workspace.component';
import { LightboxModule } from 'ngx-lightbox';



@NgModule({
  declarations: [GalleryWorkspaceComponent],
  imports: [
    CommonModule, // this is for importing angular stuff np directives like ngFor
    LightboxModule  // https://www.npmjs.com/package/ngx-lightbox
  ]
})
export class GalleryModule { }
