import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';

import { CourseModel } from '../core/course.model';
import { CourseService } from '../core/course.service';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { CourseModalDialogComponent } from '../course-modal-dialog/course-modal-dialog.component';


@Component({
  selector: 'cm-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: CourseModel[];
  title = 'Courses';

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['id', 'name', 'location', 'actions'];
  dataSource: MatTableDataSource<CourseModel>;
  // END DATA TABLE CONFIG

  constructor(
    private courseService: CourseService,
    private alert: AlertService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadCourses();
  }

  addNewCourse() {
    this.dialog.open(CourseModalDialogComponent).afterClosed().subscribe(result => console.log(result));

   /*  this.alert.success('Add new course'); */
  }
  deleteCourse (course: CourseModel) {
    this.alert.warning('Delete' + course.name);
  }
  updateCourse (course: CourseModel) {
    this.dialog.open(CourseModalDialogComponent, {
      data: {course: course}
    }).afterClosed().subscribe(result => console.log(result));
  }

  private async loadCourses() {
    this.courses = await this.courseService.getAllCourses();
    this.setDataSource(this.courses);
  }

  private setDataSource(courses: CourseModel[]) {
    this.dataSource = new MatTableDataSource(courses);
  }

}
