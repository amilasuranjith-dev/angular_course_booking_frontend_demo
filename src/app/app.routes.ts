import { Routes } from '@angular/router';
import { Contact } from './page/contact/contact';
import { Home } from './page/home/home';
import { AboutUs } from './page/about-us/about-us';
import { Courses } from './page/courses/courses';

export const routes: Routes = [
    {
    path: "about-us",
    component: AboutUs
},
{
    path: "home",
    component: Home
},
{
    path: "contact",
    component: Contact
},
{
    path: "courses",
    component: Courses
}
];
