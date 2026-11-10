import { Injectable } from '@angular/core';

//here i will create the interface for the employee data,
//  it will have the properties id, name and email
export interface Employee {
  id: number;
  name: string;
  email: string;
}

@Injectable({
providedIn: 'root'
})

export class EmpService {

  constructor() { }
  empData: Employee[] = [{
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com'
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@example.com'
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'david.wilson@example.com'
  },
  {
    id: 6,
    name: 'Sarah Thompson',
    email: 'sarah.thompson@example.com'
  },
  {
    id: 7,
    name: 'Daniel Anderson',
    email: 'daniel.anderson@example.com'
  }
]

//here the below function is used to get the details,
//it will return the empData array when called
getdetails(): Employee[] {
  return this.empData;
}
//here i will create the function to get the data from the component,
//it will take the data as a parameter and push the data into the empData array

  addEmployee(employee: Employee): void {
    this.empData.push(employee);
  }
}
