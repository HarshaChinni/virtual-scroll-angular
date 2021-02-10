import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mat-select-virtual-drop-down';
  initialZip: string;
  states: string[];
  userForm: FormGroup;
  zipCodes = [];

  constructor() {

  }

  ngOnInit() {
    this.initUserForm();
    this.setStates();
    this.setMockZipCodes();
    this.initialZip = this.userForm.get('address.zipCode').value;
    // console.log('THe zip initial value is: ', this.userForm.get('address.zipCode').value);
  }

  private initUserForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl('Harsha'),
      lastName: new FormControl('Chinni'),
      companyName: new FormControl('Galileo Financial Technologies'),
      currentRole: new FormControl('Full stack developer'),
      address: new FormGroup({
        city: new FormControl('Salt Lake City'),
        country: new FormControl('United States'),
        state: new FormControl('Utah'),
        zipCode: new FormControl('1000')
      })
    });
  }

  private setStates() {
    this.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
      "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
      "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
      "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
      "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
      "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
      "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
      "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  }

  private setMockZipCodes() {
    this.zipCodes = [...Array(10000).keys()].map((val) => val.toString().padStart(4, '0'));
  }
}
