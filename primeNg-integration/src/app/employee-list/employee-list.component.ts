import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  emp : Employee[];
  constructor(private empService : EmployeeService ) { }

  ngOnInit(): void {
    this.empService.getEmpDetails().subscribe(e => this.emp = e)
  }

}
