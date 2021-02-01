import { Component, OnInit } from '@angular/core';
import { IAlbum, Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery-workspace',
  templateUrl: './gallery-workspace.component.html',
  styleUrls: ['./gallery-workspace.component.scss']
})
export class GalleryWorkspaceComponent implements OnInit {

  private album: Array<IAlbum> = [];

  constructor(
    private lightbox: Lightbox,
    private lightboxConfig: LightboxConfig) {
    lightboxConfig.centerVertically = true;
    this.album.push(
      {
        src: 'http://placeimg.com/640/480/nature',
         caption: 'nature',
         thumb: 'http://placeimg.com/140/80/nature'
      },
      {
        src: 'http://placeimg.com/640/480/animals',
         caption: 'animals',
         thumb: 'http://placeimg.com/140/80/animals'
      },
    )
  }

  ngOnInit(): void {
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.album, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }


}
