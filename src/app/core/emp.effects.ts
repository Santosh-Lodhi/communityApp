import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from "rxjs/operators";
import { EmpService } from "./service/emp.service";

@Injectable()
export class EmployeeEffects{
    constructor(private $actions: Actions,
        private employeeService: EmpService){ };

    $loadEmployeeList = createEffect(() => 
        this.$actions.pipe(ofType('[Employee API] invoke API'),
        mergeMap(() => 
            this.employeeService.getEmployee()
            .pipe(
                map((data) => ({type: '[Employee API] API Success', employeeList: data})))
        ))
    );
} 