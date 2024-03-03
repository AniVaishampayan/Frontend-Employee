import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import {BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) {}

  private dataSubject = new BehaviorSubject<string>('');
  public data$ = this.dataSubject.asObservable();

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:7070/jenkins-test/employee/save',employee);
  }

}
