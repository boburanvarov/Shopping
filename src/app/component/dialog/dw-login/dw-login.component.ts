import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../navbar/navbar.component';

@Component({
  selector: 'app-dw-login',
  templateUrl: './dw-login.component.html',
  styleUrls: ['./dw-login.component.css']
})
export class DwLoginComponent {

  constructor(
    public dialogRef: MatDialogRef<DwLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
