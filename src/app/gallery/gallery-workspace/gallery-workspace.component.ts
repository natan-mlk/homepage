import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseRequestService } from 'src/app/services/database-request.service';
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
    private databaseRequestService: DatabaseRequestService
    ) { }

  ngOnInit(): void {
    this.databaseRequestService.getData('album.json').subscribe(
      (data: Array<AlbumData>) => {
        console.log('REQUEST', data);
        this.album = data;
      }
    );
  }

  openDialog(idx: number): void {
    const dialogRef = this.dialog.open(GalleryDialogComponent, {
      width: 'auto',
      data: {album: this.album, index: idx},
      panelClass: 'gallery-dialog',
      maxWidth: '90vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
