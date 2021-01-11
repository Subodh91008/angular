import { StudentdataService } from './../studentdata.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 public Students: Student=new Student();
 public msg;
 public  rex=/^[A-z]/;
  constructor(private service: StudentdataService) { }

  ngOnInit(): void {

  }


  public savestudent(){

     if (this.Students.id != null&&this.Students.id != undefined)

      if  (this.Students.name != null  && this.Students.name != undefined && this.Students.name.match(this.rex))
        if (this.Students.rollnumber != null&&this.Students.rollnumber != undefined)
          if (this.Students.book != null&&this.Students.book != undefined)
            if (this.Students.fees != null&&this.Students.fees != undefined){
      this.service.savestudentinfo(this.Students).subscribe(

        data=>{this.msg=data;
          console.log(data);
          this.Students=new Student()},
        error=>{console.log(error);
        }

        );
     }

     else{
       alert("no data");
     }
        }
}
