import { Component } from '@angular/core';
import { CourseList } from "../../course-list/course-list";

@Component({
  selector: 'app-courses',
  imports: [CourseList],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {

}
