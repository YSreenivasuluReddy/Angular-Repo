import { Component } from '@angular/core';
import { EmpService,Employee } from '../service/emp.service';
import {FormBuilder,ReactiveFormsModule,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  //here i will take empty object for form.
  employeeForm;

  constructor(private empService: EmpService,private fb: FormBuilder, private router: Router) { 
    //create the form group and form controls with validation
    this.employeeForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]]
      }
    )
  }

   // Add Employee Method
   addEmployee(): void {

    // Check form validation
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    // Create employee object
    const employee: Employee = {
      id: Math.max(
        0,
        ...this.empService.getdetails().map(e => e.id)
      ) + 1,

      name: this.employeeForm.value.name!,

      email: this.employeeForm.value.email!
    };

    // Send employee object to service
    this.empService.addEmployee(employee);

    alert('Employee added successfully!');
// Navigate to Employee Details
this.router.navigate(['/employee']);
    // Reset form
    this.employeeForm.reset();
  }
}
