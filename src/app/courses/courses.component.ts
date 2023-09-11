import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courses = [
    {
      courseId: 1,
      courseName: 'Mathematics',
      instructor: 'Professor Smith',
      duration: '12 weeks',
      description: 'A comprehensive course in mathematics.',
      courseType: 'Premium',
    },
    {
      courseId: 2,
      courseName: 'Computer Science',
      instructor: 'Professor Johnson',
      duration: '10 weeks',
      description: 'An introduction to computer science and programming.',
      courseType: 'Premium',
    },
    {
      courseId: 3,
      courseName: 'History',
      instructor: 'Professor Brown',
      duration: '8 weeks',
      description:
        'A study of world history from ancient times to the present.',
      courseType: 'Free',
    },
    {
      courseId: 4,
      courseName: 'Biology',
      instructor: 'Professor Davis',
      duration: '14 weeks',
      description: 'Exploring the principles of biology and the natural world.',
      courseType: 'Free',
    },
  ];

  getAllCourses() {
    return this.courses.length;
  }
  getFreeCourses() {
    return this.courses.filter((course) => course.courseType === 'Free').length;
  }

  getPremiumCourses() {
    return this.courses.filter((course) => course.courseType === 'Premium')
      .length;
  }

  selectedCourses: string = 'all';

  onchangeSelectedCourse(data: string) {
    this.selectedCourses = data;
    console.log(this.selectedCourses);
  }
}
