import {createSelector} from '@ngrx/store';
import { Employee } from '../core/service/emp.model';
import { AppState } from './app.state';

export const employeeRootSelector = (state: AppState) => state.employee;

export const uniqueEmployeeName = createSelector(
    employeeRootSelector,
    (employee: Employee[]) => {
        return [... new Set(employee.map(_ => _.name))];
    }
);

export const getEmployeeListByName = (searchString: string) => 
createSelector(employeeRootSelector, (employees: Employee[]) => {
    if(searchString.length > 2){
        return employees.filter((_) => _.name.includes(searchString));
    } else {
        return employees;
    }
});