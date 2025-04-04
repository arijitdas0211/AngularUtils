import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  // string, number, boolean, date
  courseName: string = 'Angular'; // Strongly typed // Explicit type
  cName = 'Angular 19'; // Weakly typed   // Implicit type
  stateName = "WB";
  courseId: number = 101;
  isActive: boolean = true;
  startDate: Date = new Date();

  firstName = signal("Arijit");        // Set state

  inputType = 'checkbox';

  constructor() {
    // constructor is a special method, that calls automatically while object initialization.
    this.cName = 'Angular Dev';
  }

  changeCourse(): void {
    this.courseName = "React JS";
    this.firstName.set("Sachin");         //  Changing state.
  }

  showAlert(msg: string) {
    alert(msg);
  }

}
