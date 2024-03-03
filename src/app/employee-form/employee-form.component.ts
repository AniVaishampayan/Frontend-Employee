import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee.model';
import { AlertOptions } from '../model/alert.model';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit{
  alertOptions: AlertOptions = { autoClose: true, keepAfterRouteChange: true };
  employeeForm!: FormGroup;
  isIdDisabled: boolean = true;
  actionBtn = "Save";
  constructor(   
    private fb: FormBuilder,
    private employeeService:EmployeeService,
    private alertService:AlertService
    ){}
ngOnInit(): void {
    this.initForm();
}
initForm() {
  this.employeeForm = this.fb.group({
    id: [''],
    empId:[''],
    name:[''],
    surname:[''],
    age:[''],
    emailId:[''],     
  });
}
toggleIdField() {
  this.isIdDisabled = false;
}

onSubmit()
{
  if (this.actionBtn == "Save"){

    this.employeeService.createEmployee(this.employeeForm.value).subscribe((response: Employee) => {
      this.alertService.success('Record added successfully', this.alertOptions);

    }, error => {
      this.alertService.warn(error?.error?.message);
    });
  }
}

}

