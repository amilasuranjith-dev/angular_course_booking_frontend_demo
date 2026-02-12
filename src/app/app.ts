import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseList } from "./course-list/course-list";
import { NavBar } from "./nav-bar/nav-bar";
import { Home } from "./page/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseList, NavBar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('course-booking-system');
}
