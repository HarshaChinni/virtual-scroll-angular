import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mat-select-virtual-drop-down';
  zipCodeList = [];

  constructor() {

  }

  ngOnInit() {

  }

  userForm = new FormGroup({
    firstName: new FormControl('Harsha'),
    lastName: new FormControl('Chinni'),
    companyName: new FormControl('Galileo Financial Technologies'),
    currentRole: new FormControl('Full stack developer'),
    address: new FormGroup({
      city: new FormControl(''),
      country: new FormControl('United States'),
      state: new FormControl(''),
      zipCode: new FormControl(this.zipCodeList)
    })
  });
}
