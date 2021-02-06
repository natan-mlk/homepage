import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GalleryDialogComponent } from '../gallery-dialog/gallery-dialog.component';

interface AlbumData {
  src: string;
  caption: string;
  thumb: string;
  index: number;
}

@Component({
  selector: 'app-gallery-workspace',
  templateUrl: './gallery-workspace.component.html',
  styleUrls: ['./gallery-workspace.component.scss']
})
export class GalleryWorkspaceComponent implements OnInit {

  public album: Array<AlbumData> = [];

  constructor(
    public dialog: MatDialog,
    ) {

    this.album.push(
      {
        src: 'http://placeimg.com/640/480/arch',
         caption: 'arch',
         thumb: 'http://placeimg.com/140/80/arch',
         index: 0
      },
      {
        src: 'http://placeimg.com/640/480/animals',
         caption: 'animals',
         thumb: 'http://placeimg.com/140/80/animals',
         index: 1
      },
      {
        src: 'http://placeimg.com/640/480/nature',
         caption: 'nature',
         thumb: 'http://placeimg.com/140/80/nature',
         index: 2
      },
      {
        src: 'http://placeimg.com/640/480/animals',
         caption: 'animals',
         thumb: 'http://placeimg.com/140/80/animals',
         index: 3
      },
    );
  }

  ngOnInit(): void {
  }

  openDialog(idx: any): void {
    const dialogRef = this.dialog.open(GalleryDialogComponent, {
      width: 'auto',
      data: {album: this.album, index: idx}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
