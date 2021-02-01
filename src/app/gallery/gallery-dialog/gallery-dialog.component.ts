import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  src: string,
  caption: string,
  thumb: string
}

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss']
})
export class GalleryDialogComponent implements OnInit {

  public featuredImage: string = '';

  constructor(
    public dialogRef: MatDialogRef<GalleryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      // @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        console.log('DATA', data)
      this.featuredImage = this.data.album[0].src;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  previous(){
    console.log('previous')
  }

  next() {
    console.log('next')

  }
}
