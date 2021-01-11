import { Student } from './student';
import { RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentdataService {

  baseurl = "https://microservic1e.herokuapp.com/student/data";

   public name="subodh";
  constructor(private http: HttpClient) { }

  public getallstudentdata(): Observable<Student[]>{
   return this.http.get<Student[]>(`${this.baseurl}/getall`);

  }
  public deleteOnerecord(id: number): Observable<any>{
    return this.http.delete(`${this.baseurl}/remove/${id}`,{responseType : 'text' });
  }
  public savestudentinfo(s:Student):Observable<any>{
   return this.http.post(`${this.baseurl}/save`, s, {responseType:'text'});
  }
}
