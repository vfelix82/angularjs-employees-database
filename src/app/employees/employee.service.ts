import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
      {
        id: 1,
        name: 'Eren',
        gender: 'Male',
        contactPreference: 'Email',
        email: 'vfelix82@gmail.com',
        dateOfBirth: new Date('10/18/1982'),
        department: '2',
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
        department: '3',
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
        department: '4',
        isActive: false,
        photoPath: 'assets/images/mikasa.png'
      },
    ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    save(employee: Employee) {
      this.listEmployees.push(employee);
    }
}
