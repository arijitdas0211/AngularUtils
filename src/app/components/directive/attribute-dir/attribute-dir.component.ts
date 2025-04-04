import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-dir',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css',
})
export class AttributeDirComponent {
  divBgColor: string = 'bg-primary';

  isDiv2Active: boolean = true;

  num1: string = '';
  num2: string = '';

  isChecked: boolean = true;
  country: string = 'India';

  addRed() {
    this.divBgColor = 'bg-danger';
  }

  addBlue() {
    this.divBgColor = 'bg-primary';
  }

  toggleDivColor() {
    this.isDiv2Active = !this.isDiv2Active;
  }
}
