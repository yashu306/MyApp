import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  courseName: string="Angular";
  title = 'MyApp';
  imgUrl: string = 'assets/imgs/logo.png';
  value: string ="2";
  noOfColumns = 2;
  noOfRows = 2;
  applyClass = true;
  applyStyle = false;
  styleObj1 = {
    backgroundColor: 'orange',
    color: 'black'
  }
  styleObj2 = {
    backgroundColor: 'greenyellow',
    color: 'white'
  }
  updateCourse(course:any) {
    this.courseName = course;
  }
  reset(){
    this.courseName = 'Angular';
  }
  name: string = "Angular";
  //regarding directive ngIf directive exmaples ---------------------
  isAuthenticated: boolean=false;
  submitted: boolean = false;
  userName: string='';
  onSubmit(name: string, password: string) {
    this.submitted = true;
    this.userName = name;
    if (name === "admin" && password === "admin")
      this.isAuthenticated = true;
    else
      this.isAuthenticated = false;
  }
//regarding directive ngFor directive exmaples ---------------------
courses: any[] = [
  { id: 1, name: "TypeScript" },
  { id: 2, name: "Angular" },
  { id: 3, name: "Node JS" },
  { id: 1, name: "TypeScript" }
];
//switch case directive examples---------------
myChoice: number = 0;
nextChoice() {
  this.myChoice++;
}
//ngStyle example.................
colorName: string = 'red';
  fontWeight: string = 'bold';
  borderStyle: string = '1px solid black';
// ngClass example----------------
isBordered: boolean = true;
//example for buitl in pipes
title1: string = "product details";
  productCode: string = "PROD_P001";
  productName: string = "Laptop";
}
