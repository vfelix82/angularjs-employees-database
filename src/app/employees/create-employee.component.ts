import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;


  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        // minDate: new Date(2018, 0, 1),
        // maxDate: new Date(2018, 11, 31),
        dateInputFormat: 'DD/MM/YYYY'
      });
    }

    ngOnInit() {
    }

    saveEmployee(empForm: NgForm): void {
      console.log(empForm);
    }

    togglePhotoPreview() {
      this.previewPhoto = !this.previewPhoto;
    }
  }
