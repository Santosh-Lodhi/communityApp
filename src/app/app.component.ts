import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Employee } from './core/service/emp.model';
import { EmpService } from './core/service/emp.service';
import { invokeEmployeeAPI, retrievedEmployees } from './store/employee.actions';
import { getEmployeeListByName, uniqueEmployeeName } from './store/employee.selector';

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

  // employeeNames$ = this.store.pipe(select(uniqueEmployeeName)); not required
  employeeList$ = this.store.pipe(select(getEmployeeListByName(this.searchString)));

  constructor(private empService:EmpService,
    private store: Store<{employee: Employee[]}>){ }

  ngOnInit(): void {
      // this.empService.getEmployee().subscribe(res => {
      //   this.store.dispatch(retrievedEmployees({employeeList: res as Employee[]}));
      //   console.log(res);
      //   this.results = res;
      // }); //-- service code commented due to using ngrx effects to get data
      this.store.dispatch(invokeEmployeeAPI());
  }

  getEmployees(searchStr: string): any{
    console.log(searchStr);
    this.employeeList$ = this.store.pipe(select(getEmployeeListByName(searchStr)));
    // if(searchStr.length > 0){
    //   this.empService.getEmployee().subscribe((res:any) => {
    //     // this.results = res.filter((user:any) => user.name.includes(searchStr));
    //     // console.log(this.results);
    //     this.store.dispatch(retrievedEmployees({employeeList: res as Employee[]}));
    //   });      
    // } else {
    //   this.empService.getEmployee().subscribe(res => {
    //     console.log(res);
    //     this.results = res;
    //   });
    // }
  }

}
