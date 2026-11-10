import { Component ,OnInit} from '@angular/core';
import { EmpService ,Employee} from '../service/emp.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
//i create the constructor and inject the EmpService class in it.
  constructor(private empService: EmpService) { }
  //here i create the array to get the data from the empservice class.
  //and then share the data with the employee.component.html file.
  employeeData: any[] = [];
  ngOnInit(): void {
    this.employeeData = this.empService.getdetails();
  }
}
