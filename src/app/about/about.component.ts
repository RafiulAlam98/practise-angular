import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private route: Router, private activateRoute: ActivatedRoute) {}
  ngOnInit(): void {}
  navigateToHome() {
    this.route.navigate(['home'], { relativeTo: this.activateRoute });
  }
}
