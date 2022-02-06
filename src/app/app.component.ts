import { Component, OnInit } from '@angular/core';
import { EmpService } from './core/service/emp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'community';
  searchString: string = '';
  results: any;
  empName: any = {};
  constructor(private empService:EmpService){ }
  ngOnInit(): void {
      this.empService.getEmployee().subscribe(res => {
        console.log(res);
        this.results = res;
      });
  }

  getEmployees(searchStr: string): any{
    console.log(searchStr);
    if(searchStr.length > 0){
      this.empService.getEmployee().subscribe((res:any) => {
        this.results = res.filter((user:any) => user.name.includes(searchStr));
        console.log(this.results);
      });
    } else {
      this.empService.getEmployee().subscribe(res => {
        console.log(res);
        this.results = res;
      });
    }
  }
}
