import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../Services/subject.service'
import { ISubject } from '../Interface/isubject';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
  providers: [SubjectService]
})
export class SubjectListComponent implements OnInit {
  data : ISubject[];
  cols : any;
   items: MenuItem[];
  constructor(private subService : SubjectService) { }

  ngOnInit(): void {
    this.items = [
            {label:'Home'},
            {label:'Test'}
        ];

    this.subService.getSubjectList().subscribe(e => this.data = e);

    this.cols = [
      { field: 'subCode', header: 'Subject Code' },
      { field: 'subName', header: 'Subject Naem' },
      { field: 'subMarks', header: 'Subject Marks' }
  ];
  }

}
