import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { StudentService } from '../core/student.service';
import { StudentModel } from '../core/student.model';
import { StudentModalDialogComponent } from '../student-modal-dialog/student-modal-dialog.component';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { DeleteConfirmationDialogComponent } from 'src/app/shared/delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'cm-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: StudentModel[];
  title = 'Students';

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['id', 'fullName', 'email', 'actions'];
  dataSource: MatTableDataSource<StudentModel>;
  // END DATA TABLE CONFIG

  constructor(
    private studentService: StudentService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.loadStudents();
  }

  addNewStudent() {
    this.dialog.open(StudentModalDialogComponent).afterClosed().subscribe(result => console.log(result));
  }
  updateStudent(student) {
    this.dialog.open(StudentModalDialogComponent, {
      data: {student}
    }).afterClosed().subscribe(result => console.log(result));

  }
  deleteStudent() {
  this.dialog.open(DeleteConfirmationDialogComponent).afterClosed().subscribe(result => console.log('Canceled'));
  }

  private async loadStudents() {
    this.students = await this.studentService.getAllStudents();
    this.setDataSource(this.students);
  }

  private setDataSource(students: StudentModel[]) {
    this.dataSource = new MatTableDataSource(students);
  }

}
