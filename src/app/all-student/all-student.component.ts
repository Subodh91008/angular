import { StudentdataService } from './../studentdata.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {

   public message;
  public students: Student[];
  constructor(private service: StudentdataService,private route:Router) {

  }

  ngOnInit(): void {
     this.getallstudentdetail();
  }
 public  getallstudentdetail(){
    this.service.getallstudentdata().subscribe(data=>{this.students=data},
      error=>{console.log(error)});

  }
  public removerecord(id: number){
    alert('are you sure ???');
    this.service.deleteOnerecord(id).subscribe(
      data=>{this.message=data,this.getallstudentdetail()},

      error=>{console.log(error)});
  }

}
