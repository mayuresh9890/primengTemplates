import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ISubject } from '../Interface/isubject'
import { Observable } from 'rxjs';

@Injectable()
export class SubjectService {
  
  subjs : ISubject[];

  constructor(private http : HttpClient) { }

  getSubjectList():Observable<ISubject[]>{
    return this.http.get<ISubject[]>('/assets/subject.json');
  }

}
