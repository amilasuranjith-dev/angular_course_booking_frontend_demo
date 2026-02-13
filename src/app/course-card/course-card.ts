import { DatePipe, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input() course: any;

  viewCourseDetails(title: string): void {
    alert(`Viewing course Details: ${title}`);    
  } 
}
