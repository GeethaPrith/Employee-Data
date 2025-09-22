import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-popup',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

  constructor(private dialogRef: MatDialogRef<PopupComponent>) {}

  onRefresh() {
    this.dialogRef.close(true); // pass true to indicate refresh
  }
  onCancel() {
    this.dialogRef.close(false); // pass false to indicate no refresh
  }
}
