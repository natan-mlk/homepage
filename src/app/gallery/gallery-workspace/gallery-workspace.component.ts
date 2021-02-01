import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GalleryDialogComponent } from '../gallery-dialog/gallery-dialog.component';


@Component({
  selector: 'app-gallery-workspace',
  templateUrl: './gallery-workspace.component.html',
  styleUrls: ['./gallery-workspace.component.scss']
})
export class GalleryWorkspaceComponent implements OnInit {

  private album: Array<any> = []; // zmień typ Any

  constructor(
    public dialog: MatDialog,
    ) {

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


  // GalleryDialogComponent

  openDialog(): void {
    const dialogRef = this.dialog.open(GalleryDialogComponent, {
      width: 'auto',
      data: {album: this.album} // jakiś index obrazka?
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
