import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css',
})
export class StructuralDirComponent {
  isDiv1Visible: boolean = true;
  
  isDiv2Visible: boolean = true;
  
  num1: string = '';
  num2: string = '';

  isActive = true;

  country: string = 'India';

  city: string [] = ['Kolkata', 'Hyderabad', 'Pune', 'Chennai'];

  studentList: any[] = [
    { id: 1, name: "Arijit", city: "Kolkata", designation: "SDE", isActive: true },
    { id: 2, name: "Arjun", city: "Delhi", designation: "UI", isActive: false },
    { id: 3, name: "Manash", city: "Chennai", designation: "Test", isActive: true },
    { id: 4, name: "Ravi", city: "Hyderabad", designation: "TL", isActive: true },
    { id: 5, name: "Kiran", city: "Pune", designation: "BP", isActive: false },
    { id: 6, name: "Ritika", city: "Kolkata", designation: "Manager", isActive: true }
  ];

  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;

    // if (this.isDiv2Visible == true) {
    //   this.isDiv2Visible = false;
    // } else {
    //   this.isDiv2Visible = true;
    // }

    // this.isDiv2Visible ? this.isDiv2Visible = false : this.isDiv2Visible = true;
  }

  showDiv1() {
    this.isDiv1Visible = true;
  }

  hideDiv1() {
    this.isDiv1Visible = false;
  }
}
