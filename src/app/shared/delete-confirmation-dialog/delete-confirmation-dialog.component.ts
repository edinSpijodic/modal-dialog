import { Component, OnInit, Inject } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'cm-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.css']
})
export class DeleteConfirmationDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private alert: AlertService) {
   }

  ngOnInit() {
  }

  delete() {
    this.dialogRef.close();
    this.alert.info('This entry is deleted');
  }
}
