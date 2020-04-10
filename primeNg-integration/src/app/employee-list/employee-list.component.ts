import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service.service';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  emp : any[];
   items: MenuItem[];
  constructor(private empService : EmployeeService ) { }

  ngOnInit(): void {
    this.items = [
            {label:'Home'},
            {label:'KT Report'}
        ];
    this.empService.getEmpDetails().subscribe(e => this.emp = e)
  }

}
