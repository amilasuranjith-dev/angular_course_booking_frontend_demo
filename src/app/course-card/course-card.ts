import { DatePipe, NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input() course: any;
  @Output() courseBooked = new EventEmitter<any>();
  
  onCourseBooked(): void {
    this.courseBooked.emit(this.course);
  }

  // viewCourseDetails(title: string): void {
  //   alert(`Viewing course Details: ${title}`);    
  // } 
}
