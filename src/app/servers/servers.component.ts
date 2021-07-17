import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  display = false;
  directive = false;
  CourseName = '';
  addCourse = 'Couse not yet added';

  constructor() { 
    setTimeout(() => {
      this.display = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  clickButton(){
    this.directive = true;
    this.addCourse = 'Course has been added, the name is ' + this.CourseName;
  }

  updateCourseName(event: any){
    this.CourseName = event.target.value;
  }

}
