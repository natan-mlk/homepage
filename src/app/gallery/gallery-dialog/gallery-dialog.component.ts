import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  src: string;
  caption: string;
  thumb: string;
  index: number;
}

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss']
})
export class GalleryDialogComponent implements OnInit {

  public featuredImage = '';
  private featuredIndex: number;

  constructor(
    public dialogRef: MatDialogRef<GalleryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {album: DialogData[], index: number}) {
        this.featuredImage = data.album[data.index].src;
        this.featuredIndex = data.index;
    }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  ngOnInit(): void {
  }

  previous(): void{
    this.featuredIndex -= 1;
    if (this.featuredIndex < 0){
      this.featuredIndex = this.data.album.length - 1;
    }
    this.featuredImage = this.data.album[this.featuredIndex].src;
  }

  next(): void {
    this.featuredIndex += 1;
    if (this.featuredIndex === this.data.album.length){
      this.featuredIndex = 0;
    }
    this.featuredImage = this.data.album[this.featuredIndex].src;
  }
}
