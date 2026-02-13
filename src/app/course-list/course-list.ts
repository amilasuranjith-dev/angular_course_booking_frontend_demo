import { Component, OnInit } from '@angular/core';
import { CourseCard } from "../course-card/course-card";

@Component({
  selector: 'app-course-list',
  imports: [CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})

export class CourseList implements OnInit {
  title : string = 'Available Courses';
  // courseName : string = 'Angular for Beginners';

  courses = [
    { id: 1, courseName: 'Angular for Beginners', description:'Learn basics of Angular', duration: '60 days', fee: 250, soldOut: false, img:'angular-logo.png' },
    { id: 2, courseName: 'React for Beginners', description:'Learn basics of React', duration: '45 days', fee: 150, soldOut: true, img:'react-logo.png' },
    { id: 3, courseName: 'Vue.js for Beginners', description:'Learn basics of Vue.js', duration: '30 days', fee: 180, soldOut: false, img:'vue-logo.png' },
  ];
  ngOnInit(): void {
    console.log('CourseList component initialized.');
  }

  onCourseBooked(course: any): void {
    console.log(`Parent heard about booking :`, course.courseName);
  }
}
