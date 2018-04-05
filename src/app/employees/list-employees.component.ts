import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [

    {
      id: 1,
      name: 'Eren',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'vfelix82@gmail.com',
      dateOfBirth: new Date('10/18/1982'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/eren.jpg'
    },
    {
      id: 2,
      name: 'Levi',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/levi.jpg'
    },
    {
      id: 3,
      name: 'Mikasa',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/mikasa.png'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
